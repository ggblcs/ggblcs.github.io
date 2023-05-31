import{_ as n,p as s,q as a,a1 as e}from"./framework-96b046e1.js";const t={},o=e(`<h1 id="_03-webpack配置" tabindex="-1"><a class="header-anchor" href="#_03-webpack配置" aria-hidden="true">#</a> 03 webpack配置</h1><p>使用webpack配置自动打包编译。</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code>目录结构
src----index.html
	|--js
		|--index.ts
<span class="token comment">&lt;!--
1.初始化一个自动打包的webpack项目[配置文件见下]
2.通过tsc --init初始化TypeScript配置文件
3.通过npm install typescript ts-loader安装对应loader
4.修改webpack配置文件【不用修改，修改好的】
entry: &quot;./src/js/index.ts&quot;,
resolve: {
    extensions: [ &#39;.tsx&#39;, &#39;.ts&#39;, &#39;.js&#39; ]
},
rules: [
    // ts编译配置
    {
        test: /\\.tsx?$/,
        use: &#39;ts-loader&#39;,
        exclude: /node_modules/
    }
]
--&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// webpack.config.js</span>
<span class="token keyword">const</span> path <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;path&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> HtmlWebpackPlugin <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;html-webpack-plugin&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> <span class="token punctuation">{</span> CleanWebpackPlugin <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;clean-webpack-plugin&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> CopyWebpackPlugin <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;copy-webpack-plugin&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> Webpack <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;webpack&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token comment">/*
    devServer: 自动检测文件变化
    * */</span>
    <span class="token literal-property property">devServer</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">contentBase</span><span class="token operator">:</span> <span class="token string">&quot;./bundle&quot;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">open</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
        <span class="token literal-property property">port</span><span class="token operator">:</span> <span class="token number">9090</span><span class="token punctuation">,</span>
        <span class="token literal-property property">hot</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// 开启热更新, 只要开启了热更新就不会自动刷新网页了</span>
        <span class="token literal-property property">hotOnly</span><span class="token operator">:</span> <span class="token boolean">true</span> <span class="token comment">// 哪怕不支持热更新也不要刷新网页</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token comment">/*
    配置sourcemap
    * */</span>
    <span class="token literal-property property">devtool</span><span class="token operator">:</span> <span class="token string">&quot;cheap-module-eval-source-map&quot;</span><span class="token punctuation">,</span>
    <span class="token comment">/*
    mode: 指定打包的模式
    * */</span>
    <span class="token literal-property property">mode</span><span class="token operator">:</span> <span class="token string">&quot;development&quot;</span><span class="token punctuation">,</span> <span class="token comment">// &quot;production&quot; | &quot;development&quot;</span>
    <span class="token comment">/*
    entry: 指定需要打包的文件
    * */</span>
    <span class="token comment">// entry: &quot;./src/js/index.js&quot;,</span>
    <span class="token literal-property property">entry</span><span class="token operator">:</span> <span class="token string">&quot;./src/js/index.ts&quot;</span><span class="token punctuation">,</span>
    <span class="token comment">/*
    output: 指定打包之后的文件输出的路径和输出的文件名称
    * */</span>
    <span class="token literal-property property">output</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token comment">/*
        filename: 指定打包之后的JS文件的名称
        * */</span>
        <span class="token literal-property property">filename</span><span class="token operator">:</span> <span class="token string">&quot;js/bundle.js&quot;</span><span class="token punctuation">,</span>
        <span class="token comment">/*
        path: 指定打包之后的文件存储到什么地方
        * */</span>
        <span class="token literal-property property">path</span><span class="token operator">:</span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">&quot;bundle&quot;</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">resolve</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">extensions</span><span class="token operator">:</span> <span class="token punctuation">[</span> <span class="token string">&#39;.tsx&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;.ts&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;.js&#39;</span> <span class="token punctuation">]</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token comment">/*
    module: 告诉webpack如何处理webpack不能够识别的文件
    * */</span>
    <span class="token literal-property property">module</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">rules</span><span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token comment">// ts编译配置</span>
            <span class="token punctuation">{</span>
                <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.tsx?$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
                <span class="token literal-property property">use</span><span class="token operator">:</span> <span class="token string">&#39;ts-loader&#39;</span><span class="token punctuation">,</span>
                <span class="token literal-property property">exclude</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">node_modules</span><span class="token regex-delimiter">/</span></span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">]</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token comment">/*
    plugins: 告诉webpack需要新增一些什么样的功能
    * */</span>
    <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token keyword">new</span> <span class="token class-name">HtmlWebpackPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
        <span class="token literal-property property">template</span><span class="token operator">:</span> <span class="token string">&quot;./src/index.html&quot;</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token keyword">new</span> <span class="token class-name">CleanWebpackPlugin</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token keyword">new</span> <span class="token class-name">Webpack<span class="token punctuation">.</span>HotModuleReplacementPlugin</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token keyword">new</span> <span class="token class-name">CopyWebpackPlugin</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">{</span>
            <span class="token literal-property property">from</span><span class="token operator">:</span> <span class="token string">&#39;./src/lib&#39;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">to</span><span class="token operator">:</span> <span class="token string">&#39;./lib&#39;</span>
        <span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
    <span class="token punctuation">]</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token comment">// package.json</span>
<span class="token punctuation">{</span>
  <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;01-webpack-introductory&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;version&quot;</span><span class="token operator">:</span> <span class="token string">&quot;1.0.0&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;description&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;main&quot;</span><span class="token operator">:</span> <span class="token string">&quot;src/js/index.js&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;scripts&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;dev&quot;</span><span class="token operator">:</span> <span class="token string">&quot;npx webpack-dev-server --config webpack.config.js&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;build&quot;</span><span class="token operator">:</span> <span class="token string">&quot;npx webpack --config webpack.config.js&quot;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;keywords&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token property">&quot;author&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;license&quot;</span><span class="token operator">:</span> <span class="token string">&quot;ISC&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;devDependencies&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;clean-webpack-plugin&quot;</span><span class="token operator">:</span> <span class="token string">&quot;^3.0.0&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;copy-webpack-plugin&quot;</span><span class="token operator">:</span> <span class="token string">&quot;^5.1.1&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;html-webpack-plugin&quot;</span><span class="token operator">:</span> <span class="token string">&quot;^3.2.0&quot;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;dependencies&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;@types/jquery&quot;</span><span class="token operator">:</span> <span class="token string">&quot;^3.5.0&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;jquery&quot;</span><span class="token operator">:</span> <span class="token string">&quot;^3.5.1&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;reflect-metadata&quot;</span><span class="token operator">:</span> <span class="token string">&quot;^0.1.13&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;ts-loader&quot;</span><span class="token operator">:</span> <span class="token string">&quot;^4.5.0&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;typescript&quot;</span><span class="token operator">:</span> <span class="token string">&quot;^3.9.5&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;webpack&quot;</span><span class="token operator">:</span> <span class="token string">&quot;^4.43.0&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;webpack-cli&quot;</span><span class="token operator">:</span> <span class="token string">&quot;^3.3.12&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;webpack-dev-server&quot;</span><span class="token operator">:</span> <span class="token string">&quot;^3.11.0&quot;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token comment">// tsconfig.json 可以自动生成，也可以复制。</span>
<span class="token punctuation">{</span>
  <span class="token property">&quot;compilerOptions&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token comment">/* Visit https://aka.ms/tsconfig.json to read more about this file */</span>

    <span class="token comment">/* Basic Options */</span>
    <span class="token comment">// &quot;incremental&quot;: true,                   /* Enable incremental compilation */</span>
    <span class="token property">&quot;target&quot;</span><span class="token operator">:</span> <span class="token string">&quot;es5&quot;</span><span class="token punctuation">,</span>                          <span class="token comment">/* Specify ECMAScript target version: &#39;ES3&#39; (default), &#39;ES5&#39;, &#39;ES2015&#39;, &#39;ES2016&#39;, &#39;ES2017&#39;, &#39;ES2018&#39;, &#39;ES2019&#39;, &#39;ES2020&#39;, or &#39;ESNEXT&#39;. */</span>
    <span class="token property">&quot;module&quot;</span><span class="token operator">:</span> <span class="token string">&quot;system&quot;</span><span class="token punctuation">,</span>                     <span class="token comment">/* Specify module code generation: &#39;none&#39;, &#39;commonjs&#39;, &#39;amd&#39;, &#39;system&#39;, &#39;umd&#39;, &#39;es2015&#39;, &#39;es2020&#39;, or &#39;ESNext&#39;. */</span>
    <span class="token comment">// &quot;lib&quot;: [],                             /* Specify library files to be included in the compilation. */</span>
    <span class="token comment">// &quot;allowJs&quot;: true,                       /* Allow javascript files to be compiled. */</span>
    <span class="token comment">// &quot;checkJs&quot;: true,                       /* Report errors in .js files. */</span>
    <span class="token comment">// &quot;jsx&quot;: &quot;preserve&quot;,                     /* Specify JSX code generation: &#39;preserve&#39;, &#39;react-native&#39;, or &#39;react&#39;. */</span>
    <span class="token comment">// &quot;declaration&quot;: true,                   /* Generates corresponding &#39;.d.ts&#39; file. */</span>
    <span class="token comment">// &quot;declarationMap&quot;: true,                /* Generates a sourcemap for each corresponding &#39;.d.ts&#39; file. */</span>
    <span class="token comment">// &quot;sourceMap&quot;: true,                     /* Generates corresponding &#39;.map&#39; file. */</span>
     <span class="token property">&quot;outFile&quot;</span><span class="token operator">:</span> <span class="token string">&quot;./js/bundle.js&quot;</span><span class="token punctuation">,</span>                       <span class="token comment">/* Concatenate and emit output to single file. */</span>
     <span class="token property">&quot;outDir&quot;</span><span class="token operator">:</span> <span class="token string">&quot;./bundle&quot;</span><span class="token punctuation">,</span>                        <span class="token comment">/* Redirect output structure to the directory. */</span>
    <span class="token comment">// &quot;rootDir&quot;: &quot;./&quot;,                       /* Specify the root directory of input files. Use to control the output directory structure with --outDir. */</span>
    <span class="token comment">// &quot;composite&quot;: true,                     /* Enable project compilation */</span>
    <span class="token comment">// &quot;tsBuildInfoFile&quot;: &quot;./&quot;,               /* Specify file to store incremental compilation information */</span>
    <span class="token comment">// &quot;removeComments&quot;: true,                /* Do not emit comments to output. */</span>
    <span class="token comment">// &quot;noEmit&quot;: true,                        /* Do not emit outputs. */</span>
    <span class="token comment">// &quot;importHelpers&quot;: true,                 /* Import emit helpers from &#39;tslib&#39;. */</span>
    <span class="token comment">// &quot;downlevelIteration&quot;: true,            /* Provide full support for iterables in &#39;for-of&#39;, spread, and destructuring when targeting &#39;ES5&#39; or &#39;ES3&#39;. */</span>
    <span class="token comment">// &quot;isolatedModules&quot;: true,               /* Transpile each file as a separate module (similar to &#39;ts.transpileModule&#39;). */</span>

    <span class="token comment">/* Strict Type-Checking Options */</span>
<span class="token comment">//    &quot;strict&quot;: true,                           /* Enable all strict type-checking options. */</span>
    <span class="token comment">// &quot;noImplicitAny&quot;: true,                 /* Raise error on expressions and declarations with an implied &#39;any&#39; type. */</span>
<span class="token comment">//     &quot;strictNullChecks&quot;: true,              /* Enable strict null checks. */</span>
<span class="token comment">//     &quot;strictFunctionTypes&quot;: true,           /* Enable strict checking of function types. */</span>
    <span class="token comment">// &quot;strictBindCallApply&quot;: true,           /* Enable strict &#39;bind&#39;, &#39;call&#39;, and &#39;apply&#39; methods on functions. */</span>
    <span class="token comment">// &quot;strictPropertyInitialization&quot;: true,  /* Enable strict checking of property initialization in classes. */</span>
    <span class="token comment">// &quot;noImplicitThis&quot;: true,                /* Raise error on &#39;this&#39; expressions with an implied &#39;any&#39; type. */</span>
    <span class="token comment">// &quot;alwaysStrict&quot;: true,                  /* Parse in strict mode and emit &quot;use strict&quot; for each source file. */</span>

    <span class="token comment">/* Additional Checks */</span>
    <span class="token comment">// &quot;noUnusedLocals&quot;: true,                /* Report errors on unused locals. */</span>
    <span class="token comment">// &quot;noUnusedParameters&quot;: true,            /* Report errors on unused parameters. */</span>
    <span class="token comment">// &quot;noImplicitReturns&quot;: true,             /* Report error when not all code paths in function return a value. */</span>
    <span class="token comment">// &quot;noFallthroughCasesInSwitch&quot;: true,    /* Report errors for fallthrough cases in switch statement. */</span>

    <span class="token comment">/* Module Resolution Options */</span>
    <span class="token comment">// &quot;moduleResolution&quot;: &quot;node&quot;,            /* Specify module resolution strategy: &#39;node&#39; (Node.js) or &#39;classic&#39; (TypeScript pre-1.6). */</span>
    <span class="token comment">// baseUrl用于设置解析非相对模块名称的基本目录，相对模块不会受baseUrl的影响</span>
    <span class="token comment">// &quot;baseUrl&quot;: &quot;./&quot;,                       /* Base directory to resolve non-absolute module names. */</span>
    <span class="token comment">// &quot;paths&quot;: {},                           /* A series of entries which re-map imports to lookup locations relative to the &#39;baseUrl&#39;. */</span>
    <span class="token comment">// &quot;rootDirs&quot;: [],                        /* List of root folders whose combined content represents the structure of the project at runtime. */</span>
    <span class="token comment">// &quot;typeRoots&quot;: [],                       /* List of folders to include type definitions from. */</span>
    <span class="token comment">// &quot;types&quot;: [],                           /* Type declaration files to be included in compilation. */</span>
    <span class="token comment">// &quot;allowSyntheticDefaultImports&quot;: true,  /* Allow default imports from modules with no default export. This does not affect code emit, just typechecking. */</span>
    <span class="token property">&quot;esModuleInterop&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>                  <span class="token comment">/* Enables emit interoperability between CommonJS and ES Modules via creation of namespace objects for all imports. Implies &#39;allowSyntheticDefaultImports&#39;. */</span>
    <span class="token comment">// &quot;preserveSymlinks&quot;: true,              /* Do not resolve the real path of symlinks. */</span>
    <span class="token comment">// &quot;allowUmdGlobalAccess&quot;: true,          /* Allow accessing UMD globals from modules. */</span>

    <span class="token comment">/* Source Map Options */</span>
    <span class="token comment">// &quot;sourceRoot&quot;: &quot;&quot;,                      /* Specify the location where debugger should locate TypeScript files instead of source locations. */</span>
    <span class="token comment">// &quot;mapRoot&quot;: &quot;&quot;,                         /* Specify the location where debugger should locate map files instead of generated locations. */</span>
    <span class="token comment">// &quot;inlineSourceMap&quot;: true,               /* Emit a single file with source maps instead of having a separate file. */</span>
    <span class="token comment">// &quot;inlineSources&quot;: true,                 /* Emit the source alongside the sourcemaps within a single file; requires &#39;--inlineSourceMap&#39; or &#39;--sourceMap&#39; to be set. */</span>

    <span class="token comment">/* Experimental Options */</span>
    <span class="token property">&quot;experimentalDecorators&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>        <span class="token comment">/* Enables experimental support for ES7 decorators. */</span>
    <span class="token comment">// &quot;emitDecoratorMetadata&quot;: true,         /* Enables experimental support for emitting type metadata for decorators. */</span>

    <span class="token comment">/* Advanced Options */</span>
    <span class="token property">&quot;skipLibCheck&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>                     <span class="token comment">/* Skip type checking of declaration files. */</span>
    <span class="token property">&quot;forceConsistentCasingInFileNames&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span>  <span class="token comment">/* Disallow inconsistently-cased references to the same file. */</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;include&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token string">&quot;./src/**/*.ts&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;./src/**/*.d.ts&quot;</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,6),p=[o];function i(l,c){return s(),a("div",null,p)}const u=n(t,[["render",i],["__file","03webpack配置.html.vue"]]);export{u as default};
