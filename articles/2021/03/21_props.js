import projectConfig from 'https://uki00a.github.io/deno-weeklypagic.config.js';
import Ga from 'https://uki00a.github.io/deno-weekly_ga.js';
export default {
    config: { "root": "/", ...projectConfig, branch: 'main' },
    'pagePath': "articles/2021/03/21.md",
    'layoutPath': "_layout.tsx",
    'outputPath': "articles/2021/03/21.html",
    'title': "2021/03/15〜2021/03/21の最新情報",
    'content': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: '<h1>2021/03/15〜2021/03/21の最新情報</h1>\n<nav class="toc"><ol><li><a href="#%E3%82%B5%E3%83%BC%E3%83%89%E3%83%91%E3%83%BC%E3%83%86%E3%82%A3%E3%83%A2%E3%82%B8%E3%83%A5%E3%83%BC%E3%83%AB%E3%81%AA%E3%81%A9%E3%81%AE%E6%9C%80%E6%96%B0%E6%83%85%E5%A0%B1">サードパーティモジュールなどの最新情報</a><ol><li><a href="#luath---vitewmr%E3%83%A9%E3%82%A4%E3%82%AF%E3%81%AA%E3%83%95%E3%83%AD%E3%83%B3%E3%83%88%E3%82%A8%E3%83%B3%E3%83%89%E3%83%93%E3%83%AB%E3%83%89%E3%83%84%E3%83%BC%E3%83%AB">luath - Vite/WMRライクなフロントエンドビルドツール</a></li><li><a href="#estest---deno%E3%82%84nodejs%E3%81%AA%E3%81%A9%E3%81%A7%E5%8B%95%E4%BD%9C%E3%81%99%E3%82%8B%E3%83%86%E3%82%B9%E3%83%88%E3%83%95%E3%83%AC%E3%83%BC%E3%83%A0%E3%83%AF%E3%83%BC%E3%82%AF">estest - DenoやNode.jsなどで動作するテストフレームワーク</a></li><li><a href="#servest-v120">Servest v1.2.0</a></li><li><a href="#deno-bin">deno-bin</a></li></ol></li><li><a href="#%E3%81%9D%E3%81%AE%E4%BB%96%E3%81%AE%E6%83%85%E5%A0%B1">その他の情報</a><ol><li><a href="#%E7%AC%AC10%E5%9B%9E-deno%E5%8B%89%E5%BC%B7%E4%BC%9A%E3%82%AA%E3%83%B3%E3%83%A9%E3%82%A4%E3%83%B3">第10回 Deno勉強会@オンライン</a></li></ol></li></ol></nav><h2 id="%E3%82%B5%E3%83%BC%E3%83%89%E3%83%91%E3%83%BC%E3%83%86%E3%82%A3%E3%83%A2%E3%82%B8%E3%83%A5%E3%83%BC%E3%83%AB%E3%81%AA%E3%81%A9%E3%81%AE%E6%9C%80%E6%96%B0%E6%83%85%E5%A0%B1">サードパーティモジュールなどの最新情報<a class="anchor" href="#%E3%82%B5%E3%83%BC%E3%83%89%E3%83%91%E3%83%BC%E3%83%86%E3%82%A3%E3%83%A2%E3%82%B8%E3%83%A5%E3%83%BC%E3%83%AB%E3%81%AA%E3%81%A9%E3%81%AE%E6%9C%80%E6%96%B0%E6%83%85%E5%A0%B1">§</a></h2>\n<h3 id="luath---vitewmr%E3%83%A9%E3%82%A4%E3%82%AF%E3%81%AA%E3%83%95%E3%83%AD%E3%83%B3%E3%83%88%E3%82%A8%E3%83%B3%E3%83%89%E3%83%93%E3%83%AB%E3%83%89%E3%83%84%E3%83%BC%E3%83%AB"><a href="https://github.com/cmorten/luath">luath</a> - Vite/WMRライクなフロントエンドビルドツール<a class="anchor" href="#luath---vitewmr%E3%83%A9%E3%82%A4%E3%82%AF%E3%81%AA%E3%83%95%E3%83%AD%E3%83%B3%E3%83%88%E3%82%A8%E3%83%B3%E3%83%89%E3%83%93%E3%83%AB%E3%83%89%E3%83%84%E3%83%BC%E3%83%AB">§</a></h3>\n<p><code>luath</code>というフロントエンド開発用のビルドツールが公開されました。</p>\n<p><a href="https://github.com/vitejs/vite">Vite</a>や<a href="https://github.com/preactjs/wmr">WMR</a>に影響を受けており、以下のような機能が提供されています:</p>\n<ul>\n<li>HMR及びオンデマンドビルドなどの機能を提供するdevサーバ</li>\n<li>Rollup互換のプラグインシステム</li>\n<li>PostCSSやCSS Modulesのサポート</li>\n</ul>\n<hr>\n<p><a href="https://github.com/cmorten/luath">https://github.com/cmorten/luath</a></p>\n<h3 id="estest---deno%E3%82%84nodejs%E3%81%AA%E3%81%A9%E3%81%A7%E5%8B%95%E4%BD%9C%E3%81%99%E3%82%8B%E3%83%86%E3%82%B9%E3%83%88%E3%83%95%E3%83%AC%E3%83%BC%E3%83%A0%E3%83%AF%E3%83%BC%E3%82%AF"><a href="https://github.com/mikeal/estest">estest</a> - DenoやNode.jsなどで動作するテストフレームワーク<a class="anchor" href="#estest---deno%E3%82%84nodejs%E3%81%AA%E3%81%A9%E3%81%A7%E5%8B%95%E4%BD%9C%E3%81%99%E3%82%8B%E3%83%86%E3%82%B9%E3%83%88%E3%83%95%E3%83%AC%E3%83%BC%E3%83%A0%E3%83%AF%E3%83%BC%E3%82%AF">§</a></h3>\n<p><code>estest</code>はDenoやNode.jsなどのES Modulesをサポートする環境で動作するテストフレームワークです。</p>\n<p>将来的にはブラウザもサポートされる予定のようです。</p>\n<hr>\n<p><a href="https://github.com/mikeal/estest">https://github.com/mikeal/estest</a></p>\n<h3 id="servest-v120"><a href="https://github.com/keroxp/servest/releases/tag/v1.2.0">Servest v1.2.0</a><a class="anchor" href="#servest-v120">§</a></h3>\n<p>DenoのHTTPモジュールである<a href="https://servestjs.org/">Servest</a>の<a href="https://github.com/keroxp/servest/releases/tag/v1.2.0">v1.2.0</a>がリリースされました。</p>\n<p>このリリースでは、<code>Router.options()</code>が実装されています。</p>\n<hr>\n<p><a href="https://github.com/keroxp/servest/releases/tag/v1.2.0">https://github.com/keroxp/servest/releases/tag/v1.2.0</a></p>\n<h3 id="deno-bin"><a href="https://github.com/kt3k/deno-bin">deno-bin</a><a class="anchor" href="#deno-bin">§</a></h3>\n<p><code>deno-bin</code>という、npm/npx経由でDenoを実行するためのツールが公開されました。</p>\n<p>Node.jsプロジェクトにおいて<code>deno lint</code>や<code>deno fmt</code>などを利用する用途などが想定されているようです。</p>\n<hr>\n<p><a href="https://github.com/kt3k/deno-bin">https://github.com/kt3k/deno-bin</a></p>\n<h2 id="%E3%81%9D%E3%81%AE%E4%BB%96%E3%81%AE%E6%83%85%E5%A0%B1">その他の情報<a class="anchor" href="#%E3%81%9D%E3%81%AE%E4%BB%96%E3%81%AE%E6%83%85%E5%A0%B1">§</a></h2>\n<h3 id="%E7%AC%AC10%E5%9B%9E-deno%E5%8B%89%E5%BC%B7%E4%BC%9A%E3%82%AA%E3%83%B3%E3%83%A9%E3%82%A4%E3%83%B3">第10回 Deno勉強会@オンライン<a class="anchor" href="#%E7%AC%AC10%E5%9B%9E-deno%E5%8B%89%E5%BC%B7%E4%BC%9A%E3%82%AA%E3%83%B3%E3%83%A9%E3%82%A4%E3%83%B3">§</a></h3>\n<p>2021/04/03(土)に、第10回 Deno勉強会が開催されます。</p>\n<p>詳しくは以下のページを参照ください:</p>\n<p><a href="https://deno-ja.connpass.com/event/208138/">https://deno-ja.connpass.com/event/208138/</a></p>'
        } }),
    'head': React.createElement(React.Fragment, null,
        React.createElement(Ga, { id: "G-MK2K2MRMBF" }),
        React.createElement("link", { href: "https://raw.githubusercontent.com/uki00a/blog/master/src/assets/favicon.ico", rel: "icon" })),
    'script': React.createElement(React.Fragment, null,
        React.createElement("script", { src: "https://cdn.pagic.org/react@16.13.1/umd/react.production.min.js" }),
        React.createElement("script", { src: "https://cdn.pagic.org/react-dom@16.13.1/umd/react-dom.production.min.js" }),
        React.createElement("script", { src: "https://uki00a.github.io/deno-weeklyindex.js", type: "module" })),
    'contentTitle': React.createElement("h1", { key: "0" }, "2021/03/15\u301C2021/03/21\u306E\u6700\u65B0\u60C5\u5831"),
    'contentBody': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: '<nav class="toc"><ol><li><a href="#%E3%82%B5%E3%83%BC%E3%83%89%E3%83%91%E3%83%BC%E3%83%86%E3%82%A3%E3%83%A2%E3%82%B8%E3%83%A5%E3%83%BC%E3%83%AB%E3%81%AA%E3%81%A9%E3%81%AE%E6%9C%80%E6%96%B0%E6%83%85%E5%A0%B1">サードパーティモジュールなどの最新情報</a><ol><li><a href="#luath---vitewmr%E3%83%A9%E3%82%A4%E3%82%AF%E3%81%AA%E3%83%95%E3%83%AD%E3%83%B3%E3%83%88%E3%82%A8%E3%83%B3%E3%83%89%E3%83%93%E3%83%AB%E3%83%89%E3%83%84%E3%83%BC%E3%83%AB">luath - Vite/WMRライクなフロントエンドビルドツール</a></li><li><a href="#estest---deno%E3%82%84nodejs%E3%81%AA%E3%81%A9%E3%81%A7%E5%8B%95%E4%BD%9C%E3%81%99%E3%82%8B%E3%83%86%E3%82%B9%E3%83%88%E3%83%95%E3%83%AC%E3%83%BC%E3%83%A0%E3%83%AF%E3%83%BC%E3%82%AF">estest - DenoやNode.jsなどで動作するテストフレームワーク</a></li><li><a href="#servest-v120">Servest v1.2.0</a></li><li><a href="#deno-bin">deno-bin</a></li></ol></li><li><a href="#%E3%81%9D%E3%81%AE%E4%BB%96%E3%81%AE%E6%83%85%E5%A0%B1">その他の情報</a><ol><li><a href="#%E7%AC%AC10%E5%9B%9E-deno%E5%8B%89%E5%BC%B7%E4%BC%9A%E3%82%AA%E3%83%B3%E3%83%A9%E3%82%A4%E3%83%B3">第10回 Deno勉強会@オンライン</a></li></ol></li></ol></nav><h2 id="%E3%82%B5%E3%83%BC%E3%83%89%E3%83%91%E3%83%BC%E3%83%86%E3%82%A3%E3%83%A2%E3%82%B8%E3%83%A5%E3%83%BC%E3%83%AB%E3%81%AA%E3%81%A9%E3%81%AE%E6%9C%80%E6%96%B0%E6%83%85%E5%A0%B1">サードパーティモジュールなどの最新情報<a class="anchor" href="#%E3%82%B5%E3%83%BC%E3%83%89%E3%83%91%E3%83%BC%E3%83%86%E3%82%A3%E3%83%A2%E3%82%B8%E3%83%A5%E3%83%BC%E3%83%AB%E3%81%AA%E3%81%A9%E3%81%AE%E6%9C%80%E6%96%B0%E6%83%85%E5%A0%B1">§</a></h2>\n<h3 id="luath---vitewmr%E3%83%A9%E3%82%A4%E3%82%AF%E3%81%AA%E3%83%95%E3%83%AD%E3%83%B3%E3%83%88%E3%82%A8%E3%83%B3%E3%83%89%E3%83%93%E3%83%AB%E3%83%89%E3%83%84%E3%83%BC%E3%83%AB"><a href="https://github.com/cmorten/luath">luath</a> - Vite/WMRライクなフロントエンドビルドツール<a class="anchor" href="#luath---vitewmr%E3%83%A9%E3%82%A4%E3%82%AF%E3%81%AA%E3%83%95%E3%83%AD%E3%83%B3%E3%83%88%E3%82%A8%E3%83%B3%E3%83%89%E3%83%93%E3%83%AB%E3%83%89%E3%83%84%E3%83%BC%E3%83%AB">§</a></h3>\n<p><code>luath</code>というフロントエンド開発用のビルドツールが公開されました。</p>\n<p><a href="https://github.com/vitejs/vite">Vite</a>や<a href="https://github.com/preactjs/wmr">WMR</a>に影響を受けており、以下のような機能が提供されています:</p>\n<ul>\n<li>HMR及びオンデマンドビルドなどの機能を提供するdevサーバ</li>\n<li>Rollup互換のプラグインシステム</li>\n<li>PostCSSやCSS Modulesのサポート</li>\n</ul>\n<hr>\n<p><a href="https://github.com/cmorten/luath">https://github.com/cmorten/luath</a></p>\n<h3 id="estest---deno%E3%82%84nodejs%E3%81%AA%E3%81%A9%E3%81%A7%E5%8B%95%E4%BD%9C%E3%81%99%E3%82%8B%E3%83%86%E3%82%B9%E3%83%88%E3%83%95%E3%83%AC%E3%83%BC%E3%83%A0%E3%83%AF%E3%83%BC%E3%82%AF"><a href="https://github.com/mikeal/estest">estest</a> - DenoやNode.jsなどで動作するテストフレームワーク<a class="anchor" href="#estest---deno%E3%82%84nodejs%E3%81%AA%E3%81%A9%E3%81%A7%E5%8B%95%E4%BD%9C%E3%81%99%E3%82%8B%E3%83%86%E3%82%B9%E3%83%88%E3%83%95%E3%83%AC%E3%83%BC%E3%83%A0%E3%83%AF%E3%83%BC%E3%82%AF">§</a></h3>\n<p><code>estest</code>はDenoやNode.jsなどのES Modulesをサポートする環境で動作するテストフレームワークです。</p>\n<p>将来的にはブラウザもサポートされる予定のようです。</p>\n<hr>\n<p><a href="https://github.com/mikeal/estest">https://github.com/mikeal/estest</a></p>\n<h3 id="servest-v120"><a href="https://github.com/keroxp/servest/releases/tag/v1.2.0">Servest v1.2.0</a><a class="anchor" href="#servest-v120">§</a></h3>\n<p>DenoのHTTPモジュールである<a href="https://servestjs.org/">Servest</a>の<a href="https://github.com/keroxp/servest/releases/tag/v1.2.0">v1.2.0</a>がリリースされました。</p>\n<p>このリリースでは、<code>Router.options()</code>が実装されています。</p>\n<hr>\n<p><a href="https://github.com/keroxp/servest/releases/tag/v1.2.0">https://github.com/keroxp/servest/releases/tag/v1.2.0</a></p>\n<h3 id="deno-bin"><a href="https://github.com/kt3k/deno-bin">deno-bin</a><a class="anchor" href="#deno-bin">§</a></h3>\n<p><code>deno-bin</code>という、npm/npx経由でDenoを実行するためのツールが公開されました。</p>\n<p>Node.jsプロジェクトにおいて<code>deno lint</code>や<code>deno fmt</code>などを利用する用途などが想定されているようです。</p>\n<hr>\n<p><a href="https://github.com/kt3k/deno-bin">https://github.com/kt3k/deno-bin</a></p>\n<h2 id="%E3%81%9D%E3%81%AE%E4%BB%96%E3%81%AE%E6%83%85%E5%A0%B1">その他の情報<a class="anchor" href="#%E3%81%9D%E3%81%AE%E4%BB%96%E3%81%AE%E6%83%85%E5%A0%B1">§</a></h2>\n<h3 id="%E7%AC%AC10%E5%9B%9E-deno%E5%8B%89%E5%BC%B7%E4%BC%9A%E3%82%AA%E3%83%B3%E3%83%A9%E3%82%A4%E3%83%B3">第10回 Deno勉強会@オンライン<a class="anchor" href="#%E7%AC%AC10%E5%9B%9E-deno%E5%8B%89%E5%BC%B7%E4%BC%9A%E3%82%AA%E3%83%B3%E3%83%A9%E3%82%A4%E3%83%B3">§</a></h3>\n<p>2021/04/03(土)に、第10回 Deno勉強会が開催されます。</p>\n<p>詳しくは以下のページを参照ください:</p>\n<p><a href="https://deno-ja.connpass.com/event/208138/">https://deno-ja.connpass.com/event/208138/</a></p>'
        } }),
    'toc': React.createElement("nav", { key: "0", className: "toc" },
        React.createElement("ol", null,
            React.createElement("li", null,
                React.createElement("a", { href: "#%E3%82%B5%E3%83%BC%E3%83%89%E3%83%91%E3%83%BC%E3%83%86%E3%82%A3%E3%83%A2%E3%82%B8%E3%83%A5%E3%83%BC%E3%83%AB%E3%81%AA%E3%81%A9%E3%81%AE%E6%9C%80%E6%96%B0%E6%83%85%E5%A0%B1" }, "\u30B5\u30FC\u30C9\u30D1\u30FC\u30C6\u30A3\u30E2\u30B8\u30E5\u30FC\u30EB\u306A\u3069\u306E\u6700\u65B0\u60C5\u5831"),
                React.createElement("ol", null,
                    React.createElement("li", null,
                        React.createElement("a", { href: "#luath---vitewmr%E3%83%A9%E3%82%A4%E3%82%AF%E3%81%AA%E3%83%95%E3%83%AD%E3%83%B3%E3%83%88%E3%82%A8%E3%83%B3%E3%83%89%E3%83%93%E3%83%AB%E3%83%89%E3%83%84%E3%83%BC%E3%83%AB" }, "luath - Vite/WMR\u30E9\u30A4\u30AF\u306A\u30D5\u30ED\u30F3\u30C8\u30A8\u30F3\u30C9\u30D3\u30EB\u30C9\u30C4\u30FC\u30EB")),
                    React.createElement("li", null,
                        React.createElement("a", { href: "#estest---deno%E3%82%84nodejs%E3%81%AA%E3%81%A9%E3%81%A7%E5%8B%95%E4%BD%9C%E3%81%99%E3%82%8B%E3%83%86%E3%82%B9%E3%83%88%E3%83%95%E3%83%AC%E3%83%BC%E3%83%A0%E3%83%AF%E3%83%BC%E3%82%AF" }, "estest - Deno\u3084Node.js\u306A\u3069\u3067\u52D5\u4F5C\u3059\u308B\u30C6\u30B9\u30C8\u30D5\u30EC\u30FC\u30E0\u30EF\u30FC\u30AF")),
                    React.createElement("li", null,
                        React.createElement("a", { href: "#servest-v120" }, "Servest v1.2.0")),
                    React.createElement("li", null,
                        React.createElement("a", { href: "#deno-bin" }, "deno-bin")))),
            React.createElement("li", null,
                React.createElement("a", { href: "#%E3%81%9D%E3%81%AE%E4%BB%96%E3%81%AE%E6%83%85%E5%A0%B1" }, "\u305D\u306E\u4ED6\u306E\u60C5\u5831"),
                React.createElement("ol", null,
                    React.createElement("li", null,
                        React.createElement("a", { href: "#%E7%AC%AC10%E5%9B%9E-deno%E5%8B%89%E5%BC%B7%E4%BC%9A%E3%82%AA%E3%83%B3%E3%83%A9%E3%82%A4%E3%83%B3" }, "\u7B2C10\u56DE Deno\u52C9\u5F37\u4F1A@\u30AA\u30F3\u30E9\u30A4\u30F3")))))),
    'author': "uki00a",
    'contributors': [
        "uki00a"
    ],
    'date': "2021-05-08T18:32:39.000Z",
    'updated': null,
    'excerpt': " 1. サードパーティモジュールなどの最新情報 1. luath - Vite/WMRライクなフロントエンドビルドツール 2. estest - DenoやNode.jsなどで動作するテストフレームワーク 3. Servest v1.2.0 4. deno-bin 2. その他の情報 1. 第10...",
    'cover': undefined,
    'tags': [
        "luath",
        "estest",
        "Servest",
        "deno-bin"
    ],
    'categories': [
        "news"
    ],
    'blog': {
        "isPost": true,
        "posts": [
            {
                "pagePath": "articles/2021/05/02.md",
                "title": "2021/04/26〜2021/05/02の最新情報",
                "link": "articles/2021/05/02.html",
                "date": "2021-05-08T18:32:39.000Z",
                "updated": null,
                "author": "uki00a",
                "contributors": [
                    "uki00a"
                ],
                "categories": [
                    "news"
                ],
                "tags": [
                    "gql",
                    "deno-libs/tinyhttp",
                    "crux.land",
                    "terraform-deploy-provider"
                ],
                "excerpt": " 1. gql - DenoのGraphQLサーバモジュール 2. deno-libs/tinyhttp - tinyhttpのDenoポート 3. crux.land 4. terraform-deploy-provider - Deno Deploy向けのTerraformプロパイダ gql - DenoのGraphQLサーバモジュール gqlはDen..."
            },
            {
                "pagePath": "articles/2021/04/25.md",
                "title": "2021/04/19〜2021/04/25の最新情報",
                "link": "articles/2021/04/25.html",
                "date": "2021-05-08T18:32:39.000Z",
                "updated": null,
                "author": "uki00a",
                "contributors": [
                    "uki00a"
                ],
                "categories": [
                    "news"
                ],
                "tags": [
                    "deno",
                    "deno_std",
                    "deno-puppeteer",
                    "deno-postgres",
                    "land"
                ],
                "excerpt": " 1. Deno本体の最新情報 1. Deno v1.9.1/1.9.2のリリース 2. deno_std v0.94.0/0.95.0のリリース 2. サードパーティモジュールなどの最新情報 1. deno-puppeteer v9.0.0のリリース 2. deno-postgres v0.11.0/v0.11.1がリリース..."
            },
            {
                "pagePath": "articles/2021/04/04.md",
                "title": "2021/03/29〜2021/04/04の最新情報",
                "link": "articles/2021/04/04.html",
                "date": "2021-05-08T18:32:39.000Z",
                "updated": null,
                "author": "uki00a",
                "contributors": [
                    "uki00a"
                ],
                "categories": [
                    "news"
                ],
                "tags": [
                    "deno",
                    "deno_std",
                    "Deno Deploy",
                    "Snel",
                    "Sift",
                    "deno-dom",
                    "Trex"
                ],
                "excerpt": " 1. Deno本体の最新情報 1. Deno v1.8.3がリリース 2. deno_std v0.92.0がリリース 3. Deno Deployが公開された 2. サードパーティモジュールなどの最新情報 1. Snel - DenoでSvelteアプリを開発するためのツール 2. Sift - De..."
            },
            {
                "pagePath": "articles/2021/04/18.md",
                "title": "2021/04/12〜2021/04/18の最新情報",
                "link": "articles/2021/04/18.html",
                "date": "2021-05-08T18:32:39.000Z",
                "updated": null,
                "author": "uki00a",
                "contributors": [
                    "uki00a"
                ],
                "categories": [
                    "news"
                ],
                "tags": [
                    "deno",
                    "deno_std",
                    "Oak",
                    "Servest",
                    "esbuild"
                ],
                "excerpt": " 1. Deno本体の最新情報 1. Deno v1.9.0がリリース 2. deno_std v0.93.0がリリース 2. サードパーティモジュールなどの最新情報 1. Oak v7.0.0及びv7.1.0のリリース 2. Servest v1.3.0がリリース 3. esbuildがDenoへの実験的サ..."
            },
            {
                "pagePath": "articles/2021/04/11.md",
                "title": "2021/04/05〜2021/04/11の最新情報",
                "link": "articles/2021/04/11.html",
                "date": "2021-05-08T18:32:39.000Z",
                "updated": null,
                "author": "uki00a",
                "contributors": [
                    "uki00a"
                ],
                "categories": [
                    "news"
                ],
                "tags": [
                    "deno",
                    "denoland/setup-deno",
                    "deno-postgres",
                    "rollup-plugin-deno"
                ],
                "excerpt": " 1. Deno本体の最新情報 1. Deno v1.9.0のリリースについて 2. サードパーティモジュールなどの最新情報 1. denoland/setup-deno 2. deno-postgres v0.9.0及びv0.10.0がリリース 3. rollup-plugin-deno Deno本体の最新情報 Den..."
            },
            {
                "pagePath": "articles/2021/01/10.md",
                "title": "2021/01/04〜2021/01/10の最新情報",
                "link": "articles/2021/01/10.html",
                "date": "2021-05-08T18:32:39.000Z",
                "updated": null,
                "author": "uki00a",
                "contributors": [
                    "uki00a"
                ],
                "categories": [
                    "news"
                ],
                "tags": [
                    "vno",
                    "Lume"
                ],
                "excerpt": " 1. vno 2. Lume 3. bench - DenoとNode.jsフレームワークのベンチマーク vno vnoはDenoでVue.jsを用いた開発を行うためのビルドツールです。 現時点では以下のような機能が提供されているようです。 - シングルファイルコンポ..."
            },
            {
                "pagePath": "articles/2021/01/17.md",
                "title": "2021/01/11〜2021/01/17の最新情報",
                "link": "articles/2021/01/17.html",
                "date": "2021-05-08T18:32:39.000Z",
                "updated": null,
                "author": "uki00a",
                "contributors": [
                    "uki00a"
                ],
                "categories": [
                    "news"
                ],
                "excerpt": " 1. Deno in 2020 2. Obsidian - GraphQLクライアント/サーバモジュール 3. Sinco - ブラウザのオートメーション・テストツール Deno in 2020 Denoの公式ブログポストにて、Deno in 2020という記事が公開されました。 この記事..."
            },
            {
                "pagePath": "articles/2021/01/31.md",
                "title": "2021/01/25〜2021/01/31の最新情報",
                "link": "articles/2021/01/31.html",
                "date": "2021-05-08T18:32:39.000Z",
                "updated": null,
                "author": "uki00a",
                "contributors": [
                    "uki00a"
                ],
                "categories": [
                    "news"
                ],
                "tags": [
                    "deno",
                    "deno-postgres"
                ],
                "excerpt": " 1. Deno v1.7.1がリリース 2. deno-postgresのv0.5.0/v0.6.0がリリース 3. Harmony - Discord APIライブラリ Deno v1.7.1がリリース Denoのv1.7.1がリリースされました。 このリリースに合わせて、stdのv0.85.0もリリースされ..."
            },
            {
                "pagePath": "articles/2021/01/24.md",
                "title": "2021/01/18〜2021/01/24の最新情報",
                "link": "articles/2021/01/24.html",
                "date": "2021-05-08T18:32:39.000Z",
                "updated": null,
                "author": "uki00a",
                "contributors": [
                    "uki00a"
                ],
                "categories": [
                    "news"
                ],
                "tags": [
                    "deno",
                    "deno-rollup"
                ],
                "excerpt": " 1. Deno v1.7.0がリリース 2. deno-rollup - RollupのDenoポート 3. code-block-writer - JavaScript/TypeScriptコードの生成をサポートするモジュール Deno v1.7.0がリリース Deno v1.7.0がリリースされました。 以下は変更点..."
            },
            {
                "pagePath": "articles/2021/01/03.md",
                "title": "2020/12/28〜2021/01/03の最新情報",
                "link": "articles/2021/01/03.html",
                "date": "2021-05-08T18:32:39.000Z",
                "updated": null,
                "author": "uki00a",
                "contributors": [
                    "uki00a"
                ],
                "categories": [
                    "news"
                ],
                "tags": [
                    "deno"
                ],
                "excerpt": " 1. Deno@v1.6.3がリリースされた 1. ハイライト 2. deno-puppeteerが公開された Deno@v1.6.3がリリースされた Denoのv1.6.3がリリースされました。 ハイライト - deno lspにtextDocument/renameやcacheコマンドが実装されまし..."
            },
            {
                "pagePath": "articles/2021/01/02.md",
                "title": "はじめに",
                "link": "articles/2021/01/02.html",
                "date": "2021-05-08T18:32:39.000Z",
                "updated": null,
                "author": "uki00a",
                "contributors": [
                    "uki00a"
                ],
                "categories": [
                    "notice"
                ],
                "excerpt": "このサイトでは、Denoに関する最新情報を定期的に発信しようと思います。 日頃からDenoに関するリポジトリや情報などをウォッチしており、どうせならそれに関する情報をアウトプットしてみようと思い、始めた試みです。 これか..."
            },
            {
                "pagePath": "articles/2021/02/28.md",
                "title": "2021/02/22〜2021/02/28の最新情報",
                "link": "articles/2021/02/28.html",
                "date": "2021-05-08T18:32:39.000Z",
                "updated": null,
                "author": "uki00a",
                "contributors": [
                    "uki00a"
                ],
                "categories": [
                    "news"
                ],
                "tags": [
                    "Dashport",
                    "pngs",
                    "deno_license_checker",
                    "deno-redis"
                ],
                "excerpt": " 1. Deno本体の最新情報 2. サードパーティモジュールの最新情報 1. Dashport - Passport.jsライクな認証モジュール 3. pngs 4. deno_license_checker - ライセンスヘッダーのチェックを行うツール 1. deno-redis v0.19.0がリリ..."
            },
            {
                "pagePath": "articles/2021/02/14.md",
                "title": "2021/02/08〜2021/02/14の最新情報",
                "link": "articles/2021/02/14.html",
                "date": "2021-05-08T18:32:39.000Z",
                "updated": null,
                "author": "uki00a",
                "contributors": [
                    "uki00a"
                ],
                "categories": [
                    "news"
                ],
                "tags": [
                    "deno",
                    "denops.vim",
                    "slack_web_api",
                    "deno-redis",
                    "deno-postgres"
                ],
                "excerpt": " 1. Deno本体の最新情報 1. Deno v1.7.3/v1.7.4がリリースされました 2. deno_std v0.87.0がリリースされました 2. サードパーティモジュールの最新情報 1. denops.vim - DenoでVim/Neovimプラグインを書くためのエコシステム ..."
            },
            {
                "pagePath": "articles/2021/02/21.md",
                "title": "2021/02/15〜2021/02/21の最新情報",
                "link": "articles/2021/02/21.html",
                "date": "2021-05-08T18:32:39.000Z",
                "updated": null,
                "author": "uki00a",
                "contributors": [
                    "uki00a"
                ],
                "categories": [
                    "news"
                ],
                "tags": [
                    "deno",
                    "vscode_deno",
                    "deno_mysql",
                    "Sinco",
                    "little_crony"
                ],
                "excerpt": " 1. Deno本体の最新情報 1. Deno v1.7.5がリリース 2. deno_std v0.88.0がリリース 3. vscode_deno v3.0.0がリリース 2. サードパーティモジュールの最新情報 1. deno_mysql v2.8.0がリリース 2. Sinco v1.1.0がリリース 3. li..."
            },
            {
                "pagePath": "articles/2021/02/07.md",
                "title": "2021/02/01〜2021/02/07の最新情報",
                "link": "articles/2021/02/07.html",
                "date": "2021-05-08T18:32:39.000Z",
                "updated": null,
                "author": "uki00a",
                "contributors": [
                    "uki00a"
                ],
                "categories": [
                    "news"
                ],
                "tags": [
                    "deno",
                    "deno_std",
                    "emacs-ng",
                    "deno-postgres",
                    "Trex"
                ],
                "excerpt": " 1. Deno本体の最新情報 1. Deno v1.7.2がリリース 2. deno_stdのリポジトリがdeno本体のリポジトリから分離された 2. サードパーティモジュールの最新情報 1. emacs-ng 2. deno-postgres v0.7.0がリリースされた 3. Trex v1.5..."
            },
            {
                "pagePath": "articles/2021/03/28.md",
                "title": "2021/03/22〜2021/03/28の最新情報",
                "link": "articles/2021/03/28.html",
                "date": "2021-05-08T18:32:39.000Z",
                "updated": null,
                "author": "uki00a",
                "contributors": [
                    "uki00a"
                ],
                "categories": [
                    "news"
                ],
                "tags": [
                    "deno",
                    "deno_std",
                    "swdev",
                    "deno-sqlite",
                    "deno-redis"
                ],
                "excerpt": " 1. Deno本体の最新情報 1. Deno v1.8.2がリリース 2. deno_std v0.91.0がリリース 3. status.deno.landが公開された 2. サードパーティモジュールなどの最新情報 1. swdev - Service WorkerベースのNo bundleビルドツール 2. ..."
            },
            {
                "pagePath": "articles/2021/03/14.md",
                "title": "2021/03/08〜2021/03/14の最新情報",
                "link": "articles/2021/03/14.html",
                "date": "2021-05-08T18:32:39.000Z",
                "updated": null,
                "author": "uki00a",
                "contributors": [
                    "uki00a"
                ],
                "categories": [
                    "news"
                ],
                "tags": [
                    "deno",
                    "deno_std",
                    "nano",
                    "depsbot",
                    "wizard",
                    "deno-redis",
                    "deno-codeview"
                ],
                "excerpt": " 1. Deno本体の最新情報 1. Deno v1.8.1のリリース 2. deno_std v0.90.0のリリース 2. サードパーティモジュールなどの最新情報 1. nano 2. depsbot 3. wizard 4. deno-redis v0.20.0 5. deno-codeview Deno本体の最新情報 Den..."
            },
            {
                "pagePath": "articles/2021/03/21.md",
                "title": "2021/03/15〜2021/03/21の最新情報",
                "link": "articles/2021/03/21.html",
                "date": "2021-05-08T18:32:39.000Z",
                "updated": null,
                "author": "uki00a",
                "contributors": [
                    "uki00a"
                ],
                "categories": [
                    "news"
                ],
                "tags": [
                    "luath",
                    "estest",
                    "Servest",
                    "deno-bin"
                ],
                "excerpt": " 1. サードパーティモジュールなどの最新情報 1. luath - Vite/WMRライクなフロントエンドビルドツール 2. estest - DenoやNode.jsなどで動作するテストフレームワーク 3. Servest v1.2.0 4. deno-bin 2. その他の情報 1. 第10..."
            },
            {
                "pagePath": "articles/2021/03/07.md",
                "title": "2021/03/01〜2021/03/07の最新情報",
                "link": "articles/2021/03/07.html",
                "date": "2021-05-08T18:32:39.000Z",
                "updated": null,
                "author": "uki00a",
                "contributors": [
                    "uki00a"
                ],
                "categories": [
                    "news"
                ],
                "tags": [
                    "deno",
                    "deno_std",
                    "ts_morph",
                    "vno",
                    "elsa",
                    "x/database"
                ],
                "excerpt": " 1. Deno本体の最新情報 1. Deno v1.8.0がリリースされました 2. deno_std v0.89.0がリリース 2. サードパーティモジュールなどの最新情報 1. ts_morphがDenoをサポート 2. vnoがVue 3をサポート 3. elsaの開発が再開されました..."
            }
        ],
        "categories": [
            {
                "name": "news",
                "count": 18
            },
            {
                "name": "notice",
                "count": 1
            }
        ],
        "tags": [
            {
                "name": "deno",
                "count": 13
            },
            {
                "name": "deno_std",
                "count": 7
            },
            {
                "name": "deno-postgres",
                "count": 5
            },
            {
                "name": "deno-redis",
                "count": 4
            },
            {
                "name": "Servest",
                "count": 2
            },
            {
                "name": "Trex",
                "count": 2
            },
            {
                "name": "vno",
                "count": 2
            },
            {
                "name": "crux.land",
                "count": 1
            },
            {
                "name": "Dashport",
                "count": 1
            },
            {
                "name": "Deno Deploy",
                "count": 1
            },
            {
                "name": "deno-bin",
                "count": 1
            },
            {
                "name": "deno-codeview",
                "count": 1
            },
            {
                "name": "deno-dom",
                "count": 1
            },
            {
                "name": "deno-libs/tinyhttp",
                "count": 1
            },
            {
                "name": "deno-puppeteer",
                "count": 1
            },
            {
                "name": "deno-rollup",
                "count": 1
            },
            {
                "name": "deno-sqlite",
                "count": 1
            },
            {
                "name": "deno_license_checker",
                "count": 1
            },
            {
                "name": "deno_mysql",
                "count": 1
            },
            {
                "name": "denoland/setup-deno",
                "count": 1
            },
            {
                "name": "denops.vim",
                "count": 1
            },
            {
                "name": "depsbot",
                "count": 1
            },
            {
                "name": "elsa",
                "count": 1
            },
            {
                "name": "emacs-ng",
                "count": 1
            },
            {
                "name": "esbuild",
                "count": 1
            },
            {
                "name": "estest",
                "count": 1
            },
            {
                "name": "gql",
                "count": 1
            },
            {
                "name": "land",
                "count": 1
            },
            {
                "name": "little_crony",
                "count": 1
            },
            {
                "name": "luath",
                "count": 1
            },
            {
                "name": "Lume",
                "count": 1
            },
            {
                "name": "nano",
                "count": 1
            },
            {
                "name": "Oak",
                "count": 1
            },
            {
                "name": "pngs",
                "count": 1
            },
            {
                "name": "rollup-plugin-deno",
                "count": 1
            },
            {
                "name": "Sift",
                "count": 1
            },
            {
                "name": "Sinco",
                "count": 1
            },
            {
                "name": "slack_web_api",
                "count": 1
            },
            {
                "name": "Snel",
                "count": 1
            },
            {
                "name": "swdev",
                "count": 1
            },
            {
                "name": "terraform-deploy-provider",
                "count": 1
            },
            {
                "name": "ts_morph",
                "count": 1
            },
            {
                "name": "vscode_deno",
                "count": 1
            },
            {
                "name": "wizard",
                "count": 1
            },
            {
                "name": "x/database",
                "count": 1
            }
        ]
    }
};
