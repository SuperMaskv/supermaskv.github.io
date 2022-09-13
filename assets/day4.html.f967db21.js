import{_ as n}from"./plugin-vue_export-helper.21dcd24c.js";import{o as s,c as a,d as p}from"./app.b5948408.js";const e={},t=p(`<h1 id="day-4" tabindex="-1"><a class="header-anchor" href="#day-4" aria-hidden="true">#</a> day 4</h1><h2 id="\u7528\u5355\u94FE\u8868\u5B9E\u73B0\u961F\u5217\u548C\u6808" tabindex="-1"><a class="header-anchor" href="#\u7528\u5355\u94FE\u8868\u5B9E\u73B0\u961F\u5217\u548C\u6808" aria-hidden="true">#</a> \u7528\u5355\u94FE\u8868\u5B9E\u73B0\u961F\u5217\u548C\u6808</h2><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Q1</span> <span class="token punctuation">{</span>
    <span class="token doc-comment comment">/**
     * implement queue and stack using singly linked list
     */</span>
    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token keyword">class</span> <span class="token class-name">Node</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">V</span><span class="token punctuation">&gt;</span></span> <span class="token punctuation">{</span>
        <span class="token class-name">V</span> value<span class="token punctuation">;</span>
        <span class="token class-name">Node</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">V</span><span class="token punctuation">&gt;</span></span> next<span class="token punctuation">;</span>

        <span class="token keyword">public</span> <span class="token class-name">Node</span><span class="token punctuation">(</span><span class="token class-name">V</span> value<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">this</span><span class="token punctuation">.</span>value <span class="token operator">=</span> value<span class="token punctuation">;</span>
            <span class="token keyword">this</span><span class="token punctuation">.</span>next <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token keyword">class</span> <span class="token class-name">Queue</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">V</span><span class="token punctuation">&gt;</span></span> <span class="token punctuation">{</span>
        <span class="token class-name">Node</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">V</span><span class="token punctuation">&gt;</span></span> head<span class="token punctuation">;</span>
        <span class="token class-name">Node</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">V</span><span class="token punctuation">&gt;</span></span> tail<span class="token punctuation">;</span>
        <span class="token keyword">int</span> size<span class="token punctuation">;</span>

        <span class="token keyword">public</span> <span class="token class-name">Queue</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            head <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
            tail <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
            size <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token keyword">public</span> <span class="token keyword">boolean</span> <span class="token function">isEmpty</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> size <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">size</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>size<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">offer</span><span class="token punctuation">(</span><span class="token class-name">V</span> value<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token class-name">Node</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">V</span><span class="token punctuation">&gt;</span></span> newNode <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Node</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>tail <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                head <span class="token operator">=</span> newNode<span class="token punctuation">;</span>
                tail <span class="token operator">=</span> newNode<span class="token punctuation">;</span>
            <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
                tail<span class="token punctuation">.</span>next <span class="token operator">=</span> newNode<span class="token punctuation">;</span>
                tail <span class="token operator">=</span> tail<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
            <span class="token keyword">this</span><span class="token punctuation">.</span>size<span class="token operator">++</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token keyword">public</span> <span class="token class-name">Node</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">V</span><span class="token punctuation">&gt;</span></span> <span class="token function">poll</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token class-name">Node</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">V</span><span class="token punctuation">&gt;</span></span> ans <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>

            <span class="token keyword">if</span> <span class="token punctuation">(</span>head <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                ans <span class="token operator">=</span> head<span class="token punctuation">;</span>
                head <span class="token operator">=</span> head<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
                <span class="token keyword">this</span><span class="token punctuation">.</span>size<span class="token operator">--</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
            <span class="token comment">// set tail to null if head turn to null</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>head <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                tail <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>

            <span class="token keyword">return</span> ans<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token keyword">public</span> <span class="token class-name">Node</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">V</span><span class="token punctuation">&gt;</span></span> <span class="token function">peek</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> head<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token keyword">class</span> <span class="token class-name">Stack</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">V</span><span class="token punctuation">&gt;</span></span> <span class="token punctuation">{</span>
        <span class="token class-name">Node</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">V</span><span class="token punctuation">&gt;</span></span> head<span class="token punctuation">;</span>
        <span class="token keyword">int</span> size<span class="token punctuation">;</span>

        <span class="token keyword">public</span> <span class="token class-name">Stack</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">this</span><span class="token punctuation">.</span>head <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
            <span class="token keyword">this</span><span class="token punctuation">.</span>size <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">size</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>size<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token keyword">public</span> <span class="token keyword">boolean</span> <span class="token function">isEmpty</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>size <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">push</span><span class="token punctuation">(</span><span class="token class-name">V</span> value<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token class-name">Node</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">V</span><span class="token punctuation">&gt;</span></span> newNode <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Node</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">V</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>head <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                newNode<span class="token punctuation">.</span>next <span class="token operator">=</span> head<span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
            head <span class="token operator">=</span> newNode<span class="token punctuation">;</span>
            size<span class="token operator">++</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token keyword">public</span> <span class="token class-name">V</span> <span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token class-name">V</span> ans <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>head <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                ans <span class="token operator">=</span> head<span class="token punctuation">.</span>value<span class="token punctuation">;</span>
                head <span class="token operator">=</span> head<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
                <span class="token keyword">this</span><span class="token punctuation">.</span>size<span class="token operator">--</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
            <span class="token keyword">return</span> ans<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token keyword">public</span> <span class="token class-name">V</span> <span class="token function">peek</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> head <span class="token operator">!=</span> <span class="token keyword">null</span> <span class="token operator">?</span> head<span class="token punctuation">.</span>value <span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3),c=[t];function o(l,i){return s(),a("div",null,c)}var d=n(e,[["render",o],["__file","day4.html.vue"]]);export{d as default};
