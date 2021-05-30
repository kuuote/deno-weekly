import projectConfig from 'https://uki00a.github.io/deno-weekly/pagic.config.js';
import Ga from 'https://uki00a.github.io/deno-weekly/_ga.js';
export default {
    config: { "root": "/", ...projectConfig, branch: 'main' },
    'pagePath': "articles/2021/05/16.md",
    'layoutPath': "_layout.tsx",
    'outputPath': "articles/2021/05/16.html",
    'title': "2021/05/10〜2021/05/16の最新情報",
    'content': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: '<nav class="toc"><ol><li><a href="#deno-v1101%E3%81%8C%E3%83%AA%E3%83%AA%E3%83%BC%E3%82%B9">Deno v1.10.1がリリース</a></li><li><a href="#deno_std-v0960%E3%81%8C%E3%83%AA%E3%83%AA%E3%83%BC%E3%82%B9">deno_std v0.96.0がリリース</a></li><li><a href="#angular_deno">angular_deno</a></li><li><a href="#sonoio">sono.io</a></li><li><a href="#pagic-v130%E3%81%8C%E3%83%AA%E3%83%AA%E3%83%BC%E3%82%B9">Pagic v1.3.0がリリース</a></li></ol></nav><h2 id="deno-v1101%E3%81%8C%E3%83%AA%E3%83%AA%E3%83%BC%E3%82%B9">Deno v1.10.1がリリース<a class="anchor" href="#deno-v1101%E3%81%8C%E3%83%AA%E3%83%AA%E3%83%BC%E3%82%B9">§</a></h2>\n<p>Deno v1.10.0及びv1.10.1がリリースされました。</p>\n<p>このリリースでは、<code>deno test</code>コマンドの大幅な拡張やWebStorage APIの実装などが実施されています。</p>\n<p><strong>変更点:</strong></p>\n<ul>\n<li><code>deno test</code>コマンドに<code>--jobs</code>オプションが追加され、テストの並行実行がサポートされた</li>\n<li><code>deno test</code>コマンドに<code>--doc</code>オプションが追加され、ドキュメンテーションコメント内のコードの型チェックがサポートされた</li>\n<li><code>deno test</code>コマンドに<code>--watch</code>オプションが追加された</li>\n<li><code>Deno.test</code>に<code>permissions</code>オプションが追加され、テストケースごとにパーミッションを指定できるようになった(unstable)</li>\n<li>Web Workerで<a href="https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API/Structured_clone_algorithm">structured clone algorithm</a>がサポートされた</li>\n<li><code>localStorage</code>と<code>sessionStorage</code>が実装された</li>\n<li>Markdownファイルで<code>deno-fmt-ignore-file</code>ディレクティブがサポートされた</li>\n<li><code>WebAssembly.Memory</code>で<code>shared</code>オプションがサポートされ、<code>SharedArrayBuffer</code>を受け付けるようになった</li>\n<li><code>--import-map</code>オプションでリモートURLを指定できるようになった</li>\n<li>ネイティブプラグインAPIに変更が行われた</li>\n<li><code>deno lint</code>や<code>deno compile</code>で<code>--unstable</code>オプションの指定が必須でなくなった</li>\n<li><code>TextEncoder#encodeInto</code>のパフォーマンス及びWeb標準との互換性の向上が行われた</li>\n<li><code>Deno.emit</code>の<code>bundle</code>オプションの型が<code>&quot;esm&quot; | &quot;iife&quot;</code>から<code>&quot;module&quot; | &quot;classic&quot;</code>に変更された</li>\n</ul>\n<hr>\n<ul>\n<li><a href="https://deno.com/blog/v1.10">公式ブログポスト</a></li>\n<li><a href="https://zenn.dev/magurotuna/articles/deno-release-note-1-10-1">Deno 1.10.1 がリリースされたので新機能や変更点の紹介</a></li>\n<li><a href="https://github.com/denoland/deno/releases/tag/v1.10.1">v1.10.1のリリースノート</a></li>\n<li><a href="https://github.com/denoland/deno/releases/tag/v1.10.0">v1.10.0のリリースノート</a></li>\n</ul>\n<h2 id="deno_std-v0960%E3%81%8C%E3%83%AA%E3%83%AA%E3%83%BC%E3%82%B9"><a href="https://github.com/denoland/deno_std/blob/main/Releases.md#0960--20210511">deno_std v0.96.0がリリース</a><a class="anchor" href="#deno_std-v0960%E3%81%8C%E3%83%AA%E3%83%AA%E3%83%BC%E3%82%B9">§</a></h2>\n<p>deno_stdのv0.96.0がリリースされました。</p>\n<p><strong>変更点:</strong></p>\n<ul>\n<li>http: カスタムのレスポンステキストを指定できるようになった</li>\n<li>io/util: <code>readRange()</code>関数が実装された</li>\n<li>mime/multipart: <code>MultipartReader#readForm()</code>で<code>ReadFormOptions</code>というオブジェクト形式の引数がサポートされた</li>\n<li>node: <code>console</code>モジュールが追加された</li>\n<li>node/assert: <code>rejects()</code>と<code>doesNotReject()</code>が実装された</li>\n<li>node/assert: <code>fail()</code>が実装された</li>\n<li>node/os: <code>homedir()</code>が実装された</li>\n<li>io/streams: <code>readableStreamFromReader()</code>でバイトReadableStreamが使用されないように修正された</li>\n<li>io/bufio: <code>readDelim()</code>のパフォーマンスが向上した</li>\n<li>bytes: <code>readDelim()</code>のパフォーマンス向上のため、<code>bytes_list.ts</code>が追加された</li>\n<li>node/stream: <code>Stream</code>がdefault exportされるようになった</li>\n</ul>\n<hr>\n<p><a href="https://github.com/denoland/deno_std/blob/main/Releases.md#0960--20210511">https://github.com/denoland/deno_std/blob/main/Releases.md#0960--20210511</a></p>\n<h2 id="angular_deno"><a href="https://github.com/alosaur/angular_deno">angular_deno</a><a class="anchor" href="#angular_deno">§</a></h2>\n<p><code>angular_deno</code>はDenoで動作するAngularコンポーネントのレンダリングエンジンです。</p>\n<hr>\n<p><a href="https://github.com/alosaur/angular_deno">https://github.com/alosaur/angular_deno</a></p>\n<h2 id="sonoio"><a href="https://github.com/oslabs-beta/sono.io">sono.io</a><a class="anchor" href="#sonoio">§</a></h2>\n<p><code>sono.io</code>はWebSocketを使ったリアルタイムアプリケーションを実装するためのモジュールです。</p>\n<p>実験的ではありますが、WebRTCのサポートも提供されています。</p>\n<hr>\n<ul>\n<li><a href="https://github.com/oslabs-beta/sono.io">https://github.com/oslabs-beta/sono.io</a></li>\n<li><a href="https://sono.land/">公式ドキュメント</a></li>\n</ul>\n<h2 id="pagic-v130%E3%81%8C%E3%83%AA%E3%83%AA%E3%83%BC%E3%82%B9"><a href="https://github.com/xcatliu/pagic/releases/tag/v1.3.0">Pagic v1.3.0がリリース</a><a class="anchor" href="#pagic-v130%E3%81%8C%E3%83%AA%E3%83%AA%E3%83%BC%E3%82%B9">§</a></h2>\n<p>DenoのスタティックサイトジェネレータであるPagicのv1.3.0がリリースされました。</p>\n<p>このリリースでは、SEO関連のmetaタグのサポートが追加されています。</p>\n<hr>\n<p><a href="https://github.com/xcatliu/pagic/releases/tag/v1.3.0">https://github.com/xcatliu/pagic/releases/tag/v1.3.0</a></p>'
        } }),
    'head': React.createElement(React.Fragment, null,
        React.createElement(Ga, { id: "G-MK2K2MRMBF" }),
        React.createElement(React.Fragment, { key: ".1" },
            React.createElement("link", { href: "https://raw.githubusercontent.com/uki00a/blog/master/src/assets/favicon.ico", rel: "icon" }),
            React.createElement("meta", { content: "https://raw.githubusercontent.com/uki00a/blog/master/src/assets/avatar.png", property: "og:image" }))),
    'script': React.createElement(React.Fragment, null,
        React.createElement("script", { src: "https://cdn.pagic.org/react@16.13.1/umd/react.production.min.js" }),
        React.createElement("script", { src: "https://cdn.pagic.org/react-dom@16.13.1/umd/react-dom.production.min.js" }),
        React.createElement("script", { src: "https://uki00a.github.io/deno-weekly/index.js", type: "module" })),
    'contentTitle': undefined,
    'contentBody': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: '<nav class="toc"><ol><li><a href="#deno-v1101%E3%81%8C%E3%83%AA%E3%83%AA%E3%83%BC%E3%82%B9">Deno v1.10.1がリリース</a></li><li><a href="#deno_std-v0960%E3%81%8C%E3%83%AA%E3%83%AA%E3%83%BC%E3%82%B9">deno_std v0.96.0がリリース</a></li><li><a href="#angular_deno">angular_deno</a></li><li><a href="#sonoio">sono.io</a></li><li><a href="#pagic-v130%E3%81%8C%E3%83%AA%E3%83%AA%E3%83%BC%E3%82%B9">Pagic v1.3.0がリリース</a></li></ol></nav><h2 id="deno-v1101%E3%81%8C%E3%83%AA%E3%83%AA%E3%83%BC%E3%82%B9">Deno v1.10.1がリリース<a class="anchor" href="#deno-v1101%E3%81%8C%E3%83%AA%E3%83%AA%E3%83%BC%E3%82%B9">§</a></h2>\n<p>Deno v1.10.0及びv1.10.1がリリースされました。</p>\n<p>このリリースでは、<code>deno test</code>コマンドの大幅な拡張やWebStorage APIの実装などが実施されています。</p>\n<p><strong>変更点:</strong></p>\n<ul>\n<li><code>deno test</code>コマンドに<code>--jobs</code>オプションが追加され、テストの並行実行がサポートされた</li>\n<li><code>deno test</code>コマンドに<code>--doc</code>オプションが追加され、ドキュメンテーションコメント内のコードの型チェックがサポートされた</li>\n<li><code>deno test</code>コマンドに<code>--watch</code>オプションが追加された</li>\n<li><code>Deno.test</code>に<code>permissions</code>オプションが追加され、テストケースごとにパーミッションを指定できるようになった(unstable)</li>\n<li>Web Workerで<a href="https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API/Structured_clone_algorithm">structured clone algorithm</a>がサポートされた</li>\n<li><code>localStorage</code>と<code>sessionStorage</code>が実装された</li>\n<li>Markdownファイルで<code>deno-fmt-ignore-file</code>ディレクティブがサポートされた</li>\n<li><code>WebAssembly.Memory</code>で<code>shared</code>オプションがサポートされ、<code>SharedArrayBuffer</code>を受け付けるようになった</li>\n<li><code>--import-map</code>オプションでリモートURLを指定できるようになった</li>\n<li>ネイティブプラグインAPIに変更が行われた</li>\n<li><code>deno lint</code>や<code>deno compile</code>で<code>--unstable</code>オプションの指定が必須でなくなった</li>\n<li><code>TextEncoder#encodeInto</code>のパフォーマンス及びWeb標準との互換性の向上が行われた</li>\n<li><code>Deno.emit</code>の<code>bundle</code>オプションの型が<code>&quot;esm&quot; | &quot;iife&quot;</code>から<code>&quot;module&quot; | &quot;classic&quot;</code>に変更された</li>\n</ul>\n<hr>\n<ul>\n<li><a href="https://deno.com/blog/v1.10">公式ブログポスト</a></li>\n<li><a href="https://zenn.dev/magurotuna/articles/deno-release-note-1-10-1">Deno 1.10.1 がリリースされたので新機能や変更点の紹介</a></li>\n<li><a href="https://github.com/denoland/deno/releases/tag/v1.10.1">v1.10.1のリリースノート</a></li>\n<li><a href="https://github.com/denoland/deno/releases/tag/v1.10.0">v1.10.0のリリースノート</a></li>\n</ul>\n<h2 id="deno_std-v0960%E3%81%8C%E3%83%AA%E3%83%AA%E3%83%BC%E3%82%B9"><a href="https://github.com/denoland/deno_std/blob/main/Releases.md#0960--20210511">deno_std v0.96.0がリリース</a><a class="anchor" href="#deno_std-v0960%E3%81%8C%E3%83%AA%E3%83%AA%E3%83%BC%E3%82%B9">§</a></h2>\n<p>deno_stdのv0.96.0がリリースされました。</p>\n<p><strong>変更点:</strong></p>\n<ul>\n<li>http: カスタムのレスポンステキストを指定できるようになった</li>\n<li>io/util: <code>readRange()</code>関数が実装された</li>\n<li>mime/multipart: <code>MultipartReader#readForm()</code>で<code>ReadFormOptions</code>というオブジェクト形式の引数がサポートされた</li>\n<li>node: <code>console</code>モジュールが追加された</li>\n<li>node/assert: <code>rejects()</code>と<code>doesNotReject()</code>が実装された</li>\n<li>node/assert: <code>fail()</code>が実装された</li>\n<li>node/os: <code>homedir()</code>が実装された</li>\n<li>io/streams: <code>readableStreamFromReader()</code>でバイトReadableStreamが使用されないように修正された</li>\n<li>io/bufio: <code>readDelim()</code>のパフォーマンスが向上した</li>\n<li>bytes: <code>readDelim()</code>のパフォーマンス向上のため、<code>bytes_list.ts</code>が追加された</li>\n<li>node/stream: <code>Stream</code>がdefault exportされるようになった</li>\n</ul>\n<hr>\n<p><a href="https://github.com/denoland/deno_std/blob/main/Releases.md#0960--20210511">https://github.com/denoland/deno_std/blob/main/Releases.md#0960--20210511</a></p>\n<h2 id="angular_deno"><a href="https://github.com/alosaur/angular_deno">angular_deno</a><a class="anchor" href="#angular_deno">§</a></h2>\n<p><code>angular_deno</code>はDenoで動作するAngularコンポーネントのレンダリングエンジンです。</p>\n<hr>\n<p><a href="https://github.com/alosaur/angular_deno">https://github.com/alosaur/angular_deno</a></p>\n<h2 id="sonoio"><a href="https://github.com/oslabs-beta/sono.io">sono.io</a><a class="anchor" href="#sonoio">§</a></h2>\n<p><code>sono.io</code>はWebSocketを使ったリアルタイムアプリケーションを実装するためのモジュールです。</p>\n<p>実験的ではありますが、WebRTCのサポートも提供されています。</p>\n<hr>\n<ul>\n<li><a href="https://github.com/oslabs-beta/sono.io">https://github.com/oslabs-beta/sono.io</a></li>\n<li><a href="https://sono.land/">公式ドキュメント</a></li>\n</ul>\n<h2 id="pagic-v130%E3%81%8C%E3%83%AA%E3%83%AA%E3%83%BC%E3%82%B9"><a href="https://github.com/xcatliu/pagic/releases/tag/v1.3.0">Pagic v1.3.0がリリース</a><a class="anchor" href="#pagic-v130%E3%81%8C%E3%83%AA%E3%83%AA%E3%83%BC%E3%82%B9">§</a></h2>\n<p>DenoのスタティックサイトジェネレータであるPagicのv1.3.0がリリースされました。</p>\n<p>このリリースでは、SEO関連のmetaタグのサポートが追加されています。</p>\n<hr>\n<p><a href="https://github.com/xcatliu/pagic/releases/tag/v1.3.0">https://github.com/xcatliu/pagic/releases/tag/v1.3.0</a></p>'
        } }),
    'toc': React.createElement("nav", { key: "0", className: "toc" },
        React.createElement("ol", null,
            React.createElement("li", null,
                React.createElement("a", { href: "#deno-v1101%E3%81%8C%E3%83%AA%E3%83%AA%E3%83%BC%E3%82%B9" }, "Deno v1.10.1\u304C\u30EA\u30EA\u30FC\u30B9")),
            React.createElement("li", null,
                React.createElement("a", { href: "#deno_std-v0960%E3%81%8C%E3%83%AA%E3%83%AA%E3%83%BC%E3%82%B9" }, "deno_std v0.96.0\u304C\u30EA\u30EA\u30FC\u30B9")),
            React.createElement("li", null,
                React.createElement("a", { href: "#angular_deno" }, "angular_deno")),
            React.createElement("li", null,
                React.createElement("a", { href: "#sonoio" }, "sono.io")),
            React.createElement("li", null,
                React.createElement("a", { href: "#pagic-v130%E3%81%8C%E3%83%AA%E3%83%AA%E3%83%BC%E3%82%B9" }, "Pagic v1.3.0\u304C\u30EA\u30EA\u30FC\u30B9")))),
    'author': "Yuki Tanaka",
    'contributors': [
        "Yuki Tanaka"
    ],
    'date': "2021-05-30T10:47:14.000Z",
    'updated': null,
    'excerpt': " 1. Deno v1.10.1がリリース 2. deno_std v0.96.0がリリース 3. angular_deno 4. sono.io 5. Pagic v1.3.0がリリース Deno v1.10.1がリリース Deno v1.10.0及びv1.10.1がリリースされました。 このリリースでは、deno testコマ...",
    'cover': undefined,
    'tags': [
        "deno",
        "deno_std",
        "angular_deno",
        "sono.io",
        "pagic"
    ],
    'categories': [
        "news"
    ],
    'blog': {
        "isPost": true,
        "posts": [
            {
                "pagePath": "articles/2021/05/16.md",
                "title": "2021/05/10〜2021/05/16の最新情報",
                "link": "articles/2021/05/16.html",
                "date": "2021-05-30T10:47:14.000Z",
                "updated": null,
                "author": "Yuki Tanaka",
                "contributors": [
                    "Yuki Tanaka"
                ],
                "categories": [
                    "news"
                ],
                "tags": [
                    "deno",
                    "deno_std",
                    "angular_deno",
                    "sono.io",
                    "pagic"
                ],
                "excerpt": " 1. Deno v1.10.1がリリース 2. deno_std v0.96.0がリリース 3. angular_deno 4. sono.io 5. Pagic v1.3.0がリリース Deno v1.10.1がリリース Deno v1.10.0及びv1.10.1がリリースされました。 このリリースでは、deno testコマ..."
            },
            {
                "pagePath": "articles/2021/05/09.md",
                "title": "2021/05/03〜2021/05/09の最新情報",
                "link": "articles/2021/05/09.html",
                "date": "2021-05-30T10:47:14.000Z",
                "updated": null,
                "author": "Yuki Tanaka",
                "contributors": [
                    "Yuki Tanaka"
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
                "pagePath": "articles/2021/05/23.md",
                "title": "2021/05/17〜2021/05/23の最新情報",
                "link": "articles/2021/05/23.html",
                "date": "2021-05-30T10:47:14.000Z",
                "updated": null,
                "author": "Yuki Tanaka",
                "contributors": [
                    "Yuki Tanaka"
                ],
                "categories": [
                    "news"
                ],
                "tags": [
                    "deno",
                    "deno_std",
                    "Flat Data",
                    "packup",
                    "luath"
                ],
                "excerpt": " 1. Deno v1.10.2がリリース 2. deno_std v0.97.0がリリース 3. denoland/setup-deno v1.0.0がリリース 4. Flat Data 5. packup - Parcelライクなビルドツール 6. luath v0.6.0/v0.7.0/v0.8.0がリリース Deno v1.10.2がリリース..."
            },
            {
                "pagePath": "articles/2021/05/02.md",
                "title": "2021/04/26〜2021/05/02の最新情報",
                "link": "articles/2021/05/02.html",
                "date": "2021-05-30T10:47:14.000Z",
                "updated": null,
                "author": "Yuki Tanaka",
                "contributors": [
                    "Yuki Tanaka"
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
                "pagePath": "articles/2021/05/30.md",
                "title": "2021/05/24〜2021/05/30の最新情報",
                "link": "articles/2021/05/30.html",
                "date": "2021-05-30T10:47:14.000Z",
                "updated": null,
                "author": "Yuki Tanaka",
                "contributors": [
                    "Yuki Tanaka"
                ],
                "categories": [
                    "news"
                ],
                "tags": [
                    "Sinco",
                    "Deno Deploy",
                    "Velociraptor",
                    "Cliffy"
                ],
                "excerpt": " 1. Sinco v2.0.0のリリース 2. Velociraptor v1.0.0のリリース 3. zeno.zsh 4. Cliffy v0.19.0のリリース 5. deploy_dir Sinco v2.0.0のリリース ブラウザのオートメーション・テスト用モジュールであるSincoのv2.0.0がリリー..."
            },
            {
                "pagePath": "articles/2021/03/07.md",
                "title": "2021/03/01〜2021/03/07の最新情報",
                "link": "articles/2021/03/07.html",
                "date": "2021-05-30T10:47:14.000Z",
                "updated": null,
                "author": "Yuki Tanaka",
                "contributors": [
                    "Yuki Tanaka"
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
            },
            {
                "pagePath": "articles/2021/03/21.md",
                "title": "2021/03/15〜2021/03/21の最新情報",
                "link": "articles/2021/03/21.html",
                "date": "2021-05-30T10:47:14.000Z",
                "updated": null,
                "author": "Yuki Tanaka",
                "contributors": [
                    "Yuki Tanaka"
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
                "pagePath": "articles/2021/03/14.md",
                "title": "2021/03/08〜2021/03/14の最新情報",
                "link": "articles/2021/03/14.html",
                "date": "2021-05-30T10:47:14.000Z",
                "updated": null,
                "author": "Yuki Tanaka",
                "contributors": [
                    "Yuki Tanaka"
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
                "pagePath": "articles/2021/03/28.md",
                "title": "2021/03/22〜2021/03/28の最新情報",
                "link": "articles/2021/03/28.html",
                "date": "2021-05-30T10:47:14.000Z",
                "updated": null,
                "author": "Yuki Tanaka",
                "contributors": [
                    "Yuki Tanaka"
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
                "pagePath": "articles/2021/01/10.md",
                "title": "2021/01/04〜2021/01/10の最新情報",
                "link": "articles/2021/01/10.html",
                "date": "2021-05-30T10:47:14.000Z",
                "updated": null,
                "author": "Yuki Tanaka",
                "contributors": [
                    "Yuki Tanaka"
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
                "date": "2021-05-30T10:47:14.000Z",
                "updated": null,
                "author": "Yuki Tanaka",
                "contributors": [
                    "Yuki Tanaka"
                ],
                "categories": [
                    "news"
                ],
                "excerpt": " 1. Deno in 2020 2. Obsidian - GraphQLクライアント/サーバモジュール 3. Sinco - ブラウザのオートメーション・テストツール Deno in 2020 Denoの公式ブログポストにて、Deno in 2020という記事が公開されました。 この記事..."
            },
            {
                "pagePath": "articles/2021/01/03.md",
                "title": "2020/12/28〜2021/01/03の最新情報",
                "link": "articles/2021/01/03.html",
                "date": "2021-05-30T10:47:14.000Z",
                "updated": null,
                "author": "Yuki Tanaka",
                "contributors": [
                    "Yuki Tanaka"
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
                "pagePath": "articles/2021/01/31.md",
                "title": "2021/01/25〜2021/01/31の最新情報",
                "link": "articles/2021/01/31.html",
                "date": "2021-05-30T10:47:14.000Z",
                "updated": null,
                "author": "Yuki Tanaka",
                "contributors": [
                    "Yuki Tanaka"
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
                "date": "2021-05-30T10:47:14.000Z",
                "updated": null,
                "author": "Yuki Tanaka",
                "contributors": [
                    "Yuki Tanaka"
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
                "pagePath": "articles/2021/01/02.md",
                "title": "はじめに",
                "link": "articles/2021/01/02.html",
                "date": "2021-05-30T10:47:14.000Z",
                "updated": null,
                "author": "Yuki Tanaka",
                "contributors": [
                    "Yuki Tanaka"
                ],
                "categories": [
                    "notice"
                ],
                "excerpt": "このサイトでは、Denoに関する最新情報を定期的に発信しようと思います。 日頃からDenoに関するリポジトリや情報などをウォッチしており、どうせならそれに関する情報をアウトプットしてみようと思い、始めた試みです。 これか..."
            },
            {
                "pagePath": "articles/2021/04/25.md",
                "title": "2021/04/19〜2021/04/25の最新情報",
                "link": "articles/2021/04/25.html",
                "date": "2021-05-30T10:47:14.000Z",
                "updated": null,
                "author": "Yuki Tanaka",
                "contributors": [
                    "Yuki Tanaka"
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
                "pagePath": "articles/2021/04/18.md",
                "title": "2021/04/12〜2021/04/18の最新情報",
                "link": "articles/2021/04/18.html",
                "date": "2021-05-30T10:47:14.000Z",
                "updated": null,
                "author": "Yuki Tanaka",
                "contributors": [
                    "Yuki Tanaka"
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
                "date": "2021-05-30T10:47:14.000Z",
                "updated": null,
                "author": "Yuki Tanaka",
                "contributors": [
                    "Yuki Tanaka"
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
                "pagePath": "articles/2021/04/04.md",
                "title": "2021/03/29〜2021/04/04の最新情報",
                "link": "articles/2021/04/04.html",
                "date": "2021-05-30T10:47:14.000Z",
                "updated": null,
                "author": "Yuki Tanaka",
                "contributors": [
                    "Yuki Tanaka"
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
                "pagePath": "articles/2021/02/07.md",
                "title": "2021/02/01〜2021/02/07の最新情報",
                "link": "articles/2021/02/07.html",
                "date": "2021-05-30T10:47:14.000Z",
                "updated": null,
                "author": "Yuki Tanaka",
                "contributors": [
                    "Yuki Tanaka"
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
                "pagePath": "articles/2021/02/21.md",
                "title": "2021/02/15〜2021/02/21の最新情報",
                "link": "articles/2021/02/21.html",
                "date": "2021-05-30T10:47:14.000Z",
                "updated": null,
                "author": "Yuki Tanaka",
                "contributors": [
                    "Yuki Tanaka"
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
                "pagePath": "articles/2021/02/14.md",
                "title": "2021/02/08〜2021/02/14の最新情報",
                "link": "articles/2021/02/14.html",
                "date": "2021-05-30T10:47:14.000Z",
                "updated": null,
                "author": "Yuki Tanaka",
                "contributors": [
                    "Yuki Tanaka"
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
                "pagePath": "articles/2021/02/28.md",
                "title": "2021/02/22〜2021/02/28の最新情報",
                "link": "articles/2021/02/28.html",
                "date": "2021-05-30T10:47:14.000Z",
                "updated": null,
                "author": "Yuki Tanaka",
                "contributors": [
                    "Yuki Tanaka"
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
            }
        ],
        "categories": [
            {
                "name": "news",
                "count": 22
            },
            {
                "name": "notice",
                "count": 1
            }
        ],
        "tags": [
            {
                "name": "deno",
                "count": 15
            },
            {
                "name": "deno_std",
                "count": 9
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
                "name": "Deno Deploy",
                "count": 2
            },
            {
                "name": "luath",
                "count": 2
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
                "name": "Sinco",
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
                "name": "angular_deno",
                "count": 1
            },
            {
                "name": "book",
                "count": 1
            },
            {
                "name": "Cliffy",
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
                "name": "Flat Data",
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
                "name": "Lume",
                "count": 1
            },
            {
                "name": "nano",
                "count": 1
            },
            {
                "name": "packup",
                "count": 1
            },
            {
                "name": "pagic",
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
                "name": "slack_web_api",
                "count": 1
            },
            {
                "name": "Snel",
                "count": 1
            },
            {
                "name": "sono.io",
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
                "name": "Velociraptor",
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
