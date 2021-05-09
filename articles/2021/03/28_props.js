import projectConfig from 'https://uki00a.github.io/deno-weekly/pagic.config.js';
import Ga from 'https://uki00a.github.io/deno-weekly/_ga.js';
export default {
    config: { "root": "/", ...projectConfig, branch: 'main' },
    'pagePath': "articles/2021/03/28.md",
    'layoutPath': "_layout.tsx",
    'outputPath': "articles/2021/03/28.html",
    'title': "2021/03/22〜2021/03/28の最新情報",
    'content': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: '<h1>2021/03/22〜2021/03/28の最新情報</h1>\n<nav class="toc"><ol><li><a href="#deno%E6%9C%AC%E4%BD%93%E3%81%AE%E6%9C%80%E6%96%B0%E6%83%85%E5%A0%B1">Deno本体の最新情報</a><ol><li><a href="#deno-v182%E3%81%8C%E3%83%AA%E3%83%AA%E3%83%BC%E3%82%B9">Deno v1.8.2がリリース</a></li><li><a href="#deno_std-v0910%E3%81%8C%E3%83%AA%E3%83%AA%E3%83%BC%E3%82%B9">deno_std v0.91.0がリリース</a></li><li><a href="#statusdenoland%E3%81%8C%E5%85%AC%E9%96%8B%E3%81%95%E3%82%8C%E3%81%9F">status.deno.landが公開された</a></li></ol></li><li><a href="#%E3%82%B5%E3%83%BC%E3%83%89%E3%83%91%E3%83%BC%E3%83%86%E3%82%A3%E3%83%A2%E3%82%B8%E3%83%A5%E3%83%BC%E3%83%AB%E3%81%AA%E3%81%A9%E3%81%AE%E6%9C%80%E6%96%B0%E6%83%85%E5%A0%B1">サードパーティモジュールなどの最新情報</a><ol><li><a href="#swdev---service-worker%E3%83%99%E3%83%BC%E3%82%B9%E3%81%AEno-bundle%E3%83%93%E3%83%AB%E3%83%89%E3%83%84%E3%83%BC%E3%83%AB">swdev - Service WorkerベースのNo bundleビルドツール</a></li><li><a href="#deno-sqlite-v240%E3%81%8C%E3%83%AA%E3%83%AA%E3%83%BC%E3%82%B9">deno-sqlite v2.4.0がリリース</a></li><li><a href="#deno-redis-v0210%E3%81%8C%E3%83%AA%E3%83%AA%E3%83%BC%E3%82%B9">deno-redis v0.21.0がリリース</a></li></ol></li></ol></nav><h2 id="deno%E6%9C%AC%E4%BD%93%E3%81%AE%E6%9C%80%E6%96%B0%E6%83%85%E5%A0%B1">Deno本体の最新情報<a class="anchor" href="#deno%E6%9C%AC%E4%BD%93%E3%81%AE%E6%9C%80%E6%96%B0%E6%83%85%E5%A0%B1">§</a></h2>\n<h3 id="deno-v182%E3%81%8C%E3%83%AA%E3%83%AA%E3%83%BC%E3%82%B9"><a href="https://github.com/denoland/deno/releases/tag/v1.8.2">Deno v1.8.2がリリース</a><a class="anchor" href="#deno-v182%E3%81%8C%E3%83%AA%E3%83%AA%E3%83%BC%E3%82%B9">§</a></h3>\n<p>Deno v1.8.2がリリースされました。</p>\n<p>このリリースでは、バグ修正などを中心に実施されています。</p>\n<p><strong>変更点:</strong></p>\n<ul>\n<li><code>Deno.createHttpClient</code>を使用した際に、<code>User-Agent</code>ヘッダが設定されない問題が修正された</li>\n<li><code>deno fmt</code>でmarkdownファイルのスペースなどが適切にフォーマットされない問題が修正された</li>\n<li><code>deno lsp</code>でエディタ以外でファイルが編集されていると、&quot;The current snapshot version is\nmissing.&quot;エラーが発生する問題が修正された</li>\n<li><code>deno lsp</code>でファイルの診断(diagnostics)が固有のスレッドで実行されるようになった</li>\n</ul>\n<hr>\n<p><a href="https://github.com/denoland/deno/releases/tag/v1.8.2">https://github.com/denoland/deno/releases/tag/v1.8.2</a></p>\n<h3 id="deno_std-v0910%E3%81%8C%E3%83%AA%E3%83%AA%E3%83%BC%E3%82%B9"><a href="https://github.com/denoland/deno_std/releases/tag/0.91.0">deno_std v0.91.0がリリース</a><a class="anchor" href="#deno_std-v0910%E3%81%8C%E3%83%AA%E3%83%AA%E3%83%BC%E3%82%B9">§</a></h3>\n<p>deno_std v0.91.0がリリースされました。</p>\n<p><strong>主な変更点:</strong></p>\n<ul>\n<li>encoding/yaml: <code>EXTENDED_SCHEMA</code>が追加され、Yamlファイル内でJSの関数や正規表現などを使用できるようになった</li>\n<li>io/streams: <code>readerFromIterable()</code>が追加された</li>\n<li>node/fs: <code>utimes</code>/<code>utimesSync</code>が実装された</li>\n</ul>\n<p>など</p>\n<hr>\n<p><a href="https://github.com/denoland/deno_std/releases/tag/0.91.0">https://github.com/denoland/deno_std/releases/tag/0.91.0</a></p>\n<h3 id="statusdenoland%E3%81%8C%E5%85%AC%E9%96%8B%E3%81%95%E3%82%8C%E3%81%9F"><a href="https://status.deno.land">status.deno.land</a>が公開された<a class="anchor" href="#statusdenoland%E3%81%8C%E5%85%AC%E9%96%8B%E3%81%95%E3%82%8C%E3%81%9F">§</a></h3>\n<p><a href="https://status.deno.land">status.deno.land</a>が公開されました。</p>\n<p>このサイトでは、<a href="https://deno.land/x">Denoのモジュールレジストリ</a>などの運用状況を確認することができます。</p>\n<hr>\n<p><a href="https://status.deno.land">https://status.deno.land</a></p>\n<h2 id="%E3%82%B5%E3%83%BC%E3%83%89%E3%83%91%E3%83%BC%E3%83%86%E3%82%A3%E3%83%A2%E3%82%B8%E3%83%A5%E3%83%BC%E3%83%AB%E3%81%AA%E3%81%A9%E3%81%AE%E6%9C%80%E6%96%B0%E6%83%85%E5%A0%B1">サードパーティモジュールなどの最新情報<a class="anchor" href="#%E3%82%B5%E3%83%BC%E3%83%89%E3%83%91%E3%83%BC%E3%83%86%E3%82%A3%E3%83%A2%E3%82%B8%E3%83%A5%E3%83%BC%E3%83%AB%E3%81%AA%E3%81%A9%E3%81%AE%E6%9C%80%E6%96%B0%E6%83%85%E5%A0%B1">§</a></h2>\n<h3 id="swdev---service-worker%E3%83%99%E3%83%BC%E3%82%B9%E3%81%AEno-bundle%E3%83%93%E3%83%AB%E3%83%89%E3%83%84%E3%83%BC%E3%83%AB"><a href="https://github.com/mizchi/swdev">swdev</a> - Service WorkerベースのNo bundleビルドツール<a class="anchor" href="#swdev---service-worker%E3%83%99%E3%83%BC%E3%82%B9%E3%81%AEno-bundle%E3%83%93%E3%83%AB%E3%83%89%E3%83%84%E3%83%BC%E3%83%AB">§</a></h3>\n<p>swdevという、Service WorkerベースのNo bundleビルドツールが公開されました。</p>\n<p>以下のようが機能が提供されているようです:</p>\n<ul>\n<li>Service Workerを利用したTypeScriptやSvelteファイルの変換</li>\n<li><code>Deno.watchFs()</code>ベースのCache Busting</li>\n<li>Rollupベースのプロダクションビルド</li>\n</ul>\n<hr>\n<p><a href="https://github.com/mizchi/swdev">https://github.com/mizchi/swdev</a></p>\n<h3 id="deno-sqlite-v240%E3%81%8C%E3%83%AA%E3%83%AA%E3%83%BC%E3%82%B9"><a href="https://github.com/dyedgreen/deno-sqlite/releases/tag/v2.4.0">deno-sqlite v2.4.0</a>がリリース<a class="anchor" href="#deno-sqlite-v240%E3%81%8C%E3%83%AA%E3%83%AA%E3%83%BC%E3%82%B9">§</a></h3>\n<p><a href="https://github.com/dyedgreen/deno-sqlite">deno-sqlite</a> v2.4.0がリリースされました。</p>\n<p>このリリースでは、以下のような変更が加わっています:</p>\n<ul>\n<li>SQLiteのv3.35.0への更新</li>\n<li><code>DB.prepareQuery()</code>の追加</li>\n<li><a href="https://www.sqlite.org/json1.html">JSON1拡張</a>の有効化</li>\n</ul>\n<hr>\n<p><a href="https://github.com/dyedgreen/deno-sqlite/releases/tag/v2.4.0">https://github.com/dyedgreen/deno-sqlite/releases/tag/v2.4.0</a></p>\n<h3 id="deno-redis-v0210%E3%81%8C%E3%83%AA%E3%83%AA%E3%83%BC%E3%82%B9"><a href="https://github.com/denodrivers/redis/releases/tag/v0.21.0">deno-redis v0.21.0</a>がリリース<a class="anchor" href="#deno-redis-v0210%E3%81%8C%E3%83%AA%E3%83%AA%E3%83%BC%E3%82%B9">§</a></h3>\n<p><a href="https://github.com/denodrivers/redis">deno-redis</a> v0.21.0がリリースされました。</p>\n<p>このリリースでは、Redisコマンドを実行するための低レベルインターフェースである<code>CommandExecutor</code>に破壊的変更が加わっています。</p>\n<p><strong>変更点:</strong></p>\n<ul>\n<li><code>CommandExecutor#exec()</code>の戻り値の型が変更された</li>\n<li>一部のコマンドの引数として<code>Number</code>及び<code>Uint8Array</code>を渡せるようになった</li>\n<li><a href="https://redis.io/commands/client-kill">CLIENT KILLコマンド</a>がサポートされた</li>\n</ul>\n<hr>\n<p><a href="https://github.com/denodrivers/redis/releases/tag/v0.21.0">https://github.com/denodrivers/redis/releases/tag/v0.21.0</a></p>'
        } }),
    'head': React.createElement(React.Fragment, null,
        React.createElement(Ga, { id: "G-MK2K2MRMBF" }),
        React.createElement(React.Fragment, { key: ".1" },
            React.createElement("link", { href: "https://raw.githubusercontent.com/uki00a/blog/master/src/assets/favicon.ico", rel: "icon" }),
            React.createElement("meta", { content: "https://raw.githubusercontent.com/uki00a/blog/master/src/assets/avatar.png", property: "og:image" }),
            React.createElement("meta", { content: "summary", name: "twitter:card" }),
            React.createElement("meta", { content: "@uki00a", name: "twitter:site" }),
            React.createElement("meta", { content: "@uki00a", name: "twitter:creator" }))),
    'script': React.createElement(React.Fragment, null,
        React.createElement("script", { src: "https://cdn.pagic.org/react@16.13.1/umd/react.production.min.js" }),
        React.createElement("script", { src: "https://cdn.pagic.org/react-dom@16.13.1/umd/react-dom.production.min.js" }),
        React.createElement("script", { src: "https://uki00a.github.io/deno-weekly/index.js", type: "module" })),
    'contentTitle': React.createElement("h1", { key: "0" }, "2021/03/22\u301C2021/03/28\u306E\u6700\u65B0\u60C5\u5831"),
    'contentBody': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: '<nav class="toc"><ol><li><a href="#deno%E6%9C%AC%E4%BD%93%E3%81%AE%E6%9C%80%E6%96%B0%E6%83%85%E5%A0%B1">Deno本体の最新情報</a><ol><li><a href="#deno-v182%E3%81%8C%E3%83%AA%E3%83%AA%E3%83%BC%E3%82%B9">Deno v1.8.2がリリース</a></li><li><a href="#deno_std-v0910%E3%81%8C%E3%83%AA%E3%83%AA%E3%83%BC%E3%82%B9">deno_std v0.91.0がリリース</a></li><li><a href="#statusdenoland%E3%81%8C%E5%85%AC%E9%96%8B%E3%81%95%E3%82%8C%E3%81%9F">status.deno.landが公開された</a></li></ol></li><li><a href="#%E3%82%B5%E3%83%BC%E3%83%89%E3%83%91%E3%83%BC%E3%83%86%E3%82%A3%E3%83%A2%E3%82%B8%E3%83%A5%E3%83%BC%E3%83%AB%E3%81%AA%E3%81%A9%E3%81%AE%E6%9C%80%E6%96%B0%E6%83%85%E5%A0%B1">サードパーティモジュールなどの最新情報</a><ol><li><a href="#swdev---service-worker%E3%83%99%E3%83%BC%E3%82%B9%E3%81%AEno-bundle%E3%83%93%E3%83%AB%E3%83%89%E3%83%84%E3%83%BC%E3%83%AB">swdev - Service WorkerベースのNo bundleビルドツール</a></li><li><a href="#deno-sqlite-v240%E3%81%8C%E3%83%AA%E3%83%AA%E3%83%BC%E3%82%B9">deno-sqlite v2.4.0がリリース</a></li><li><a href="#deno-redis-v0210%E3%81%8C%E3%83%AA%E3%83%AA%E3%83%BC%E3%82%B9">deno-redis v0.21.0がリリース</a></li></ol></li></ol></nav><h2 id="deno%E6%9C%AC%E4%BD%93%E3%81%AE%E6%9C%80%E6%96%B0%E6%83%85%E5%A0%B1">Deno本体の最新情報<a class="anchor" href="#deno%E6%9C%AC%E4%BD%93%E3%81%AE%E6%9C%80%E6%96%B0%E6%83%85%E5%A0%B1">§</a></h2>\n<h3 id="deno-v182%E3%81%8C%E3%83%AA%E3%83%AA%E3%83%BC%E3%82%B9"><a href="https://github.com/denoland/deno/releases/tag/v1.8.2">Deno v1.8.2がリリース</a><a class="anchor" href="#deno-v182%E3%81%8C%E3%83%AA%E3%83%AA%E3%83%BC%E3%82%B9">§</a></h3>\n<p>Deno v1.8.2がリリースされました。</p>\n<p>このリリースでは、バグ修正などを中心に実施されています。</p>\n<p><strong>変更点:</strong></p>\n<ul>\n<li><code>Deno.createHttpClient</code>を使用した際に、<code>User-Agent</code>ヘッダが設定されない問題が修正された</li>\n<li><code>deno fmt</code>でmarkdownファイルのスペースなどが適切にフォーマットされない問題が修正された</li>\n<li><code>deno lsp</code>でエディタ以外でファイルが編集されていると、&quot;The current snapshot version is\nmissing.&quot;エラーが発生する問題が修正された</li>\n<li><code>deno lsp</code>でファイルの診断(diagnostics)が固有のスレッドで実行されるようになった</li>\n</ul>\n<hr>\n<p><a href="https://github.com/denoland/deno/releases/tag/v1.8.2">https://github.com/denoland/deno/releases/tag/v1.8.2</a></p>\n<h3 id="deno_std-v0910%E3%81%8C%E3%83%AA%E3%83%AA%E3%83%BC%E3%82%B9"><a href="https://github.com/denoland/deno_std/releases/tag/0.91.0">deno_std v0.91.0がリリース</a><a class="anchor" href="#deno_std-v0910%E3%81%8C%E3%83%AA%E3%83%AA%E3%83%BC%E3%82%B9">§</a></h3>\n<p>deno_std v0.91.0がリリースされました。</p>\n<p><strong>主な変更点:</strong></p>\n<ul>\n<li>encoding/yaml: <code>EXTENDED_SCHEMA</code>が追加され、Yamlファイル内でJSの関数や正規表現などを使用できるようになった</li>\n<li>io/streams: <code>readerFromIterable()</code>が追加された</li>\n<li>node/fs: <code>utimes</code>/<code>utimesSync</code>が実装された</li>\n</ul>\n<p>など</p>\n<hr>\n<p><a href="https://github.com/denoland/deno_std/releases/tag/0.91.0">https://github.com/denoland/deno_std/releases/tag/0.91.0</a></p>\n<h3 id="statusdenoland%E3%81%8C%E5%85%AC%E9%96%8B%E3%81%95%E3%82%8C%E3%81%9F"><a href="https://status.deno.land">status.deno.land</a>が公開された<a class="anchor" href="#statusdenoland%E3%81%8C%E5%85%AC%E9%96%8B%E3%81%95%E3%82%8C%E3%81%9F">§</a></h3>\n<p><a href="https://status.deno.land">status.deno.land</a>が公開されました。</p>\n<p>このサイトでは、<a href="https://deno.land/x">Denoのモジュールレジストリ</a>などの運用状況を確認することができます。</p>\n<hr>\n<p><a href="https://status.deno.land">https://status.deno.land</a></p>\n<h2 id="%E3%82%B5%E3%83%BC%E3%83%89%E3%83%91%E3%83%BC%E3%83%86%E3%82%A3%E3%83%A2%E3%82%B8%E3%83%A5%E3%83%BC%E3%83%AB%E3%81%AA%E3%81%A9%E3%81%AE%E6%9C%80%E6%96%B0%E6%83%85%E5%A0%B1">サードパーティモジュールなどの最新情報<a class="anchor" href="#%E3%82%B5%E3%83%BC%E3%83%89%E3%83%91%E3%83%BC%E3%83%86%E3%82%A3%E3%83%A2%E3%82%B8%E3%83%A5%E3%83%BC%E3%83%AB%E3%81%AA%E3%81%A9%E3%81%AE%E6%9C%80%E6%96%B0%E6%83%85%E5%A0%B1">§</a></h2>\n<h3 id="swdev---service-worker%E3%83%99%E3%83%BC%E3%82%B9%E3%81%AEno-bundle%E3%83%93%E3%83%AB%E3%83%89%E3%83%84%E3%83%BC%E3%83%AB"><a href="https://github.com/mizchi/swdev">swdev</a> - Service WorkerベースのNo bundleビルドツール<a class="anchor" href="#swdev---service-worker%E3%83%99%E3%83%BC%E3%82%B9%E3%81%AEno-bundle%E3%83%93%E3%83%AB%E3%83%89%E3%83%84%E3%83%BC%E3%83%AB">§</a></h3>\n<p>swdevという、Service WorkerベースのNo bundleビルドツールが公開されました。</p>\n<p>以下のようが機能が提供されているようです:</p>\n<ul>\n<li>Service Workerを利用したTypeScriptやSvelteファイルの変換</li>\n<li><code>Deno.watchFs()</code>ベースのCache Busting</li>\n<li>Rollupベースのプロダクションビルド</li>\n</ul>\n<hr>\n<p><a href="https://github.com/mizchi/swdev">https://github.com/mizchi/swdev</a></p>\n<h3 id="deno-sqlite-v240%E3%81%8C%E3%83%AA%E3%83%AA%E3%83%BC%E3%82%B9"><a href="https://github.com/dyedgreen/deno-sqlite/releases/tag/v2.4.0">deno-sqlite v2.4.0</a>がリリース<a class="anchor" href="#deno-sqlite-v240%E3%81%8C%E3%83%AA%E3%83%AA%E3%83%BC%E3%82%B9">§</a></h3>\n<p><a href="https://github.com/dyedgreen/deno-sqlite">deno-sqlite</a> v2.4.0がリリースされました。</p>\n<p>このリリースでは、以下のような変更が加わっています:</p>\n<ul>\n<li>SQLiteのv3.35.0への更新</li>\n<li><code>DB.prepareQuery()</code>の追加</li>\n<li><a href="https://www.sqlite.org/json1.html">JSON1拡張</a>の有効化</li>\n</ul>\n<hr>\n<p><a href="https://github.com/dyedgreen/deno-sqlite/releases/tag/v2.4.0">https://github.com/dyedgreen/deno-sqlite/releases/tag/v2.4.0</a></p>\n<h3 id="deno-redis-v0210%E3%81%8C%E3%83%AA%E3%83%AA%E3%83%BC%E3%82%B9"><a href="https://github.com/denodrivers/redis/releases/tag/v0.21.0">deno-redis v0.21.0</a>がリリース<a class="anchor" href="#deno-redis-v0210%E3%81%8C%E3%83%AA%E3%83%AA%E3%83%BC%E3%82%B9">§</a></h3>\n<p><a href="https://github.com/denodrivers/redis">deno-redis</a> v0.21.0がリリースされました。</p>\n<p>このリリースでは、Redisコマンドを実行するための低レベルインターフェースである<code>CommandExecutor</code>に破壊的変更が加わっています。</p>\n<p><strong>変更点:</strong></p>\n<ul>\n<li><code>CommandExecutor#exec()</code>の戻り値の型が変更された</li>\n<li>一部のコマンドの引数として<code>Number</code>及び<code>Uint8Array</code>を渡せるようになった</li>\n<li><a href="https://redis.io/commands/client-kill">CLIENT KILLコマンド</a>がサポートされた</li>\n</ul>\n<hr>\n<p><a href="https://github.com/denodrivers/redis/releases/tag/v0.21.0">https://github.com/denodrivers/redis/releases/tag/v0.21.0</a></p>'
        } }),
    'toc': React.createElement("nav", { key: "0", className: "toc" },
        React.createElement("ol", null,
            React.createElement("li", null,
                React.createElement("a", { href: "#deno%E6%9C%AC%E4%BD%93%E3%81%AE%E6%9C%80%E6%96%B0%E6%83%85%E5%A0%B1" }, "Deno\u672C\u4F53\u306E\u6700\u65B0\u60C5\u5831"),
                React.createElement("ol", null,
                    React.createElement("li", null,
                        React.createElement("a", { href: "#deno-v182%E3%81%8C%E3%83%AA%E3%83%AA%E3%83%BC%E3%82%B9" }, "Deno v1.8.2\u304C\u30EA\u30EA\u30FC\u30B9")),
                    React.createElement("li", null,
                        React.createElement("a", { href: "#deno_std-v0910%E3%81%8C%E3%83%AA%E3%83%AA%E3%83%BC%E3%82%B9" }, "deno_std v0.91.0\u304C\u30EA\u30EA\u30FC\u30B9")),
                    React.createElement("li", null,
                        React.createElement("a", { href: "#statusdenoland%E3%81%8C%E5%85%AC%E9%96%8B%E3%81%95%E3%82%8C%E3%81%9F" }, "status.deno.land\u304C\u516C\u958B\u3055\u308C\u305F")))),
            React.createElement("li", null,
                React.createElement("a", { href: "#%E3%82%B5%E3%83%BC%E3%83%89%E3%83%91%E3%83%BC%E3%83%86%E3%82%A3%E3%83%A2%E3%82%B8%E3%83%A5%E3%83%BC%E3%83%AB%E3%81%AA%E3%81%A9%E3%81%AE%E6%9C%80%E6%96%B0%E6%83%85%E5%A0%B1" }, "\u30B5\u30FC\u30C9\u30D1\u30FC\u30C6\u30A3\u30E2\u30B8\u30E5\u30FC\u30EB\u306A\u3069\u306E\u6700\u65B0\u60C5\u5831"),
                React.createElement("ol", null,
                    React.createElement("li", null,
                        React.createElement("a", { href: "#swdev---service-worker%E3%83%99%E3%83%BC%E3%82%B9%E3%81%AEno-bundle%E3%83%93%E3%83%AB%E3%83%89%E3%83%84%E3%83%BC%E3%83%AB" }, "swdev - Service Worker\u30D9\u30FC\u30B9\u306ENo bundle\u30D3\u30EB\u30C9\u30C4\u30FC\u30EB")),
                    React.createElement("li", null,
                        React.createElement("a", { href: "#deno-sqlite-v240%E3%81%8C%E3%83%AA%E3%83%AA%E3%83%BC%E3%82%B9" }, "deno-sqlite v2.4.0\u304C\u30EA\u30EA\u30FC\u30B9")),
                    React.createElement("li", null,
                        React.createElement("a", { href: "#deno-redis-v0210%E3%81%8C%E3%83%AA%E3%83%AA%E3%83%BC%E3%82%B9" }, "deno-redis v0.21.0\u304C\u30EA\u30EA\u30FC\u30B9")))))),
    'author': "uki00a",
    'contributors': [
        "uki00a"
    ],
    'date': "2021-05-09T10:23:57.000Z",
    'updated': null,
    'excerpt': " 1. Deno本体の最新情報 1. Deno v1.8.2がリリース 2. deno_std v0.91.0がリリース 3. status.deno.landが公開された 2. サードパーティモジュールなどの最新情報 1. swdev - Service WorkerベースのNo bundleビルドツール 2. ...",
    'cover': undefined,
    'tags': [
        "deno",
        "deno_std",
        "swdev",
        "deno-sqlite",
        "deno-redis"
    ],
    'categories': [
        "news"
    ],
    'blog': {
        "isPost": true,
        "posts": [
            {
                "pagePath": "articles/2021/05/09.md",
                "title": "2021/05/03〜2021/05/09の最新情報",
                "link": "articles/2021/05/09.html",
                "date": "2021-05-09T10:23:57.000Z",
                "updated": null,
                "author": "uki00a",
                "contributors": [
                    "uki00a"
                ],
                "categories": [
                    "news"
                ],
                "tags": [
                    "alosaur",
                    "book",
                    "Oak"
                ],
                "excerpt": " 1. alosaur v0.31.0がリリース 2. alosaur-lite 3. Oak v7.4.0がリリース 4. Effective Deno alosaur v0.31.0がリリース DenoのWebフレームワークであるalosaurのv0.31.0がリリースされました。 変更点: - ContextがHttpConte..."
            },
            {
                "pagePath": "articles/2021/05/02.md",
                "title": "2021/04/26〜2021/05/02の最新情報",
                "link": "articles/2021/05/02.html",
                "date": "2021-05-09T10:23:57.000Z",
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
                "date": "2021-05-09T10:23:57.000Z",
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
                "date": "2021-05-09T10:23:57.000Z",
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
                "date": "2021-05-09T10:23:57.000Z",
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
                "date": "2021-05-09T10:23:57.000Z",
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
                "date": "2021-05-09T10:23:57.000Z",
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
                "date": "2021-05-09T10:23:57.000Z",
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
                "date": "2021-05-09T10:23:57.000Z",
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
                "date": "2021-05-09T10:23:57.000Z",
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
                "date": "2021-05-09T10:23:57.000Z",
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
                "date": "2021-05-09T10:23:57.000Z",
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
                "date": "2021-05-09T10:23:57.000Z",
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
                "date": "2021-05-09T10:23:57.000Z",
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
                "date": "2021-05-09T10:23:57.000Z",
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
                "date": "2021-05-09T10:23:57.000Z",
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
                "date": "2021-05-09T10:23:57.000Z",
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
                "date": "2021-05-09T10:23:57.000Z",
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
                "date": "2021-05-09T10:23:57.000Z",
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
                "date": "2021-05-09T10:23:57.000Z",
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
                "count": 19
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
                "name": "Oak",
                "count": 2
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
                "name": "alosaur",
                "count": 1
            },
            {
                "name": "book",
                "count": 1
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
