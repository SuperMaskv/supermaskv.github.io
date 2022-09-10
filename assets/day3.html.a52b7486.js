import{_ as n}from"./plugin-vue_export-helper.21dcd24c.js";import{o as s,c as a,d as e}from"./app.d425af56.js";const p={},t=e(`<h1 id="day-3" tabindex="-1"><a class="header-anchor" href="#day-3" aria-hidden="true">#</a> day 3</h1><h2 id="\u53CD\u8F6C\u5355\u5411\u94FE\u8868" tabindex="-1"><a class="header-anchor" href="#\u53CD\u8F6C\u5355\u5411\u94FE\u8868" aria-hidden="true">#</a> \u53CD\u8F6C\u5355\u5411\u94FE\u8868</h2><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Q1</span> <span class="token punctuation">{</span>
    <span class="token doc-comment comment">/**
     * reverse a singly linked list
     */</span>
    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token keyword">class</span> <span class="token class-name">Node</span> <span class="token punctuation">{</span>
        <span class="token keyword">int</span> value<span class="token punctuation">;</span>
        <span class="token class-name">Node</span> next<span class="token punctuation">;</span>

        <span class="token keyword">public</span> <span class="token class-name">Node</span><span class="token punctuation">(</span><span class="token keyword">int</span> value<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">this</span><span class="token punctuation">.</span>value <span class="token operator">=</span> value<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token class-name">Node</span> <span class="token function">reverseSinglyLinkedList</span><span class="token punctuation">(</span><span class="token class-name">Node</span> head<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">Node</span> pre <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
        <span class="token class-name">Node</span> next <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
        <span class="token keyword">while</span> <span class="token punctuation">(</span>head <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            next <span class="token operator">=</span> head<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
            head<span class="token punctuation">.</span>next <span class="token operator">=</span> pre<span class="token punctuation">;</span>
            pre <span class="token operator">=</span> head<span class="token punctuation">;</span>
            head <span class="token operator">=</span> next<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> pre<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u53CD\u8F6C\u53CC\u5411\u94FE\u8868" tabindex="-1"><a class="header-anchor" href="#\u53CD\u8F6C\u53CC\u5411\u94FE\u8868" aria-hidden="true">#</a> \u53CD\u8F6C\u53CC\u5411\u94FE\u8868</h2><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Q2</span> <span class="token punctuation">{</span>
    <span class="token doc-comment comment">/**
     * reverse a two-way linked list
     */</span>
    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token keyword">class</span> <span class="token class-name">Node</span> <span class="token punctuation">{</span>
        <span class="token keyword">int</span> value<span class="token punctuation">;</span>
        <span class="token class-name">Node</span> pre<span class="token punctuation">;</span>
        <span class="token class-name">Node</span> next<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token class-name">Node</span> <span class="token function">reverseTwoWayLinkedList</span><span class="token punctuation">(</span><span class="token class-name">Node</span> head<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">Node</span> pre <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
        <span class="token class-name">Node</span> next <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
        <span class="token keyword">while</span> <span class="token punctuation">(</span>head <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            next <span class="token operator">=</span> head<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
            head<span class="token punctuation">.</span>next <span class="token operator">=</span> pre<span class="token punctuation">;</span>
            head<span class="token punctuation">.</span>pre <span class="token operator">=</span> next<span class="token punctuation">;</span>
            pre <span class="token operator">=</span> head<span class="token punctuation">;</span>
            head <span class="token operator">=</span> next<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> pre<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5),c=[t];function l(o,i){return s(),a("div",null,c)}var r=n(p,[["render",l],["__file","day3.html.vue"]]);export{r as default};
