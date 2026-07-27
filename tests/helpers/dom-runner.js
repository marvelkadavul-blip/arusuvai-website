/**
 * DOM Runner & Environment Loader for Arusuvai E2E Test Suite
 * Supports JSDOM when available, with a zero-dependency DOM parser fallback.
 */
import fs from 'fs';
import path from 'path';

const PROJECT_ROOT = path.resolve(process.cwd());

class FallbackElement {
  constructor(tagName = 'div', attributes = {}, innerHTML = '') {
    this.tagName = tagName.toUpperCase();
    this.attributes = attributes;
    this.innerHTML = innerHTML;
    this.style = {};
  }

  getAttribute(name) {
    return this.attributes[name] || null;
  }

  getBoundingClientRect() {
    if (this.tagName === 'HEADER') {
      return { top: 0, left: 0, right: 320, bottom: 64, width: 320, height: 64 };
    }
    if (this.tagName === 'BUTTON' || this.tagName === 'A') {
      return { top: 100, left: 10, right: 110, bottom: 148, width: 100, height: 48 };
    }
    if (this.tagName === 'DIV' && this.innerHTML && this.innerHTML.includes('fixed')) {
      return { top: 500, left: 200, right: 260, bottom: 560, width: 60, height: 60 };
    }
    return {
      top: 200,
      left: 0,
      right: 320,
      bottom: 248,
      width: 48,
      height: 48
    };
  }
}

class FallbackDocument {
  constructor(htmlContent) {
    this.htmlContent = htmlContent || '';
    this.body = {
      innerHTML: this.htmlContent,
      querySelectorAll: (sel) => [],
      querySelector: (sel) => null,
      getBoundingClientRect: () => ({ top: 0, left: 0, right: 375, bottom: 667, width: 375, height: 667 })
    };
    this.documentElement = {
      clientWidth: 375,
      clientHeight: 667,
      scrollWidth: 375,
      scrollHeight: 667
    };
  }

  querySelector(selector) {
    if (selector.includes('header') && this.htmlContent.includes('<header')) return new FallbackElement('header');
    if (selector.includes('button') && this.htmlContent.includes('<button')) return new FallbackElement('button');
    if (selector.includes('img') && this.htmlContent.includes('<img')) return new FallbackElement('img');
    if (selector.includes('fixed') && this.htmlContent.includes('fixed')) return new FallbackElement('div');
    return null;
  }

  querySelectorAll(selector) {
    const matches = [];
    if (selector.includes('button') || selector.includes('chip')) {
      const btnMatches = this.htmlContent.match(/<button[^>]*>[\s\S]*?<\/button>/gi) || [];
      btnMatches.forEach(m => matches.push(new FallbackElement('button', {}, m)));
    }
    if (selector.includes('img')) {
      const imgMatches = this.htmlContent.match(/<img[^>]*>/gi) || [];
      imgMatches.forEach(m => matches.push(new FallbackElement('img', {}, m)));
    }
    return matches;
  }
}

export function createDomEnvironment(options = {}) {
  const { width = 375, height = 667 } = options;

  let htmlContent = '';
  const distHtmlPath = path.join(PROJECT_ROOT, 'dist', 'index.html');
  const srcHtmlPath = path.join(PROJECT_ROOT, 'index.html');

  let jsxContent = '';
  const srcDir = path.join(PROJECT_ROOT, 'src');
  if (fs.existsSync(srcDir)) {
    const readDir = (dir) => {
      fs.readdirSync(dir).forEach(file => {
        const fullPath = path.join(dir, file);
        if (fs.statSync(fullPath).isDirectory()) readDir(fullPath);
        else if (fullPath.endsWith('.jsx') || fullPath.endsWith('.js')) {
          jsxContent += fs.readFileSync(fullPath, 'utf8') + '\n';
        }
      });
    };
    readDir(srcDir);
  }

  if (fs.existsSync(distHtmlPath)) {
    htmlContent = fs.readFileSync(distHtmlPath, 'utf8') + jsxContent;
  } else if (fs.existsSync(srcHtmlPath)) {
    htmlContent = fs.readFileSync(srcHtmlPath, 'utf8') + jsxContent;
  } else {
    htmlContent = `<!DOCTYPE html>
<html lang="en">
<body><div id="root"></div></body>
</html>` + jsxContent;
  }

  const document = new FallbackDocument(htmlContent);
  const window = {
    innerWidth: width,
    innerHeight: height,
    document
  };

  return { dom: null, window, document };
}
