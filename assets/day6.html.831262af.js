import{_ as n}from"./plugin-vue_export-helper.21dcd24c.js";import{o as a,c as s,d as p}from"./app.170c0747.js";const e={},t=p(`<h1 id="day-6" tabindex="-1"><a class="header-anchor" href="#day-6" aria-hidden="true">#</a> day 6</h1><h2 id="\u4F7F\u7528long\u6570\u7EC4\u5B9E\u73B0bitmap" tabindex="-1"><a class="header-anchor" href="#\u4F7F\u7528long\u6570\u7EC4\u5B9E\u73B0bitmap" aria-hidden="true">#</a> \u4F7F\u7528long\u6570\u7EC4\u5B9E\u73B0bitmap</h2><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">MyBitmap</span> <span class="token punctuation">{</span>
    <span class="token keyword">long</span><span class="token punctuation">[</span><span class="token punctuation">]</span> map<span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
        * \u5982\u679C\u9700\u8981\u8BB0\u5F55\u6700\u591Amax\u4E2A\u5143\u7D20\u7684\u72B6\u6001\uFF0C\u90A3\u4E48\u5C31\u9700\u8981max/64+1\u4E2Along\u7C7B\u578B\uFF1B
        */</span>
    <span class="token keyword">public</span> <span class="token class-name">MyBitmap</span><span class="token punctuation">(</span><span class="token keyword">int</span> max<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>map <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token keyword">long</span><span class="token punctuation">[</span><span class="token punctuation">(</span>max <span class="token operator">+</span> <span class="token number">64</span><span class="token punctuation">)</span> <span class="token operator">&gt;&gt;</span> <span class="token number">6</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
        * \u5C06value\u4F4D\u7F6E\u4E0A\u7684\u5143\u7D20\u8BB0\u5F55\u4E3A1\uFF0C\u5728map\u6570\u7EC4\u4E2D\u7684\u4E0B\u6807\u4E3Avalue/64\uFF1B
        * value&amp;63\u8868\u793Avalue%64\uFF1B
        */</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">add</span><span class="token punctuation">(</span><span class="token keyword">int</span> value<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>map<span class="token punctuation">[</span>value <span class="token operator">&gt;&gt;</span> <span class="token number">6</span><span class="token punctuation">]</span> <span class="token operator">|=</span> <span class="token punctuation">(</span><span class="token number">1L</span> <span class="token operator">&lt;&lt;</span> <span class="token punctuation">(</span>value <span class="token operator">&amp;</span> <span class="token number">63</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">delete</span><span class="token punctuation">(</span><span class="token keyword">int</span> value<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>map<span class="token punctuation">[</span>value <span class="token operator">&gt;&gt;</span> <span class="token number">6</span><span class="token punctuation">]</span> <span class="token operator">&amp;=</span> <span class="token operator">~</span><span class="token punctuation">(</span><span class="token number">1L</span> <span class="token operator">&lt;&lt;</span> <span class="token punctuation">(</span>value <span class="token operator">&amp;</span> <span class="token number">63</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">boolean</span> <span class="token function">contains</span><span class="token punctuation">(</span><span class="token keyword">int</span> value<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>map<span class="token punctuation">[</span>value <span class="token operator">&gt;&gt;</span> <span class="token number">6</span><span class="token punctuation">]</span> <span class="token operator">&amp;</span> <span class="token punctuation">(</span><span class="token number">1L</span> <span class="token operator">&lt;&lt;</span> <span class="token punctuation">(</span>value <span class="token operator">&amp;</span> <span class="token number">63</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">!=</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u4F7F\u7528\u4F4D\u8FD0\u7B97\u5B9E\u73B0\u52A0\u51CF\u4E58\u9664" tabindex="-1"><a class="header-anchor" href="#\u4F7F\u7528\u4F4D\u8FD0\u7B97\u5B9E\u73B0\u52A0\u51CF\u4E58\u9664" aria-hidden="true">#</a> \u4F7F\u7528\u4F4D\u8FD0\u7B97\u5B9E\u73B0\u52A0\u51CF\u4E58\u9664</h2><ul><li>a^b \u7B49\u4E8Ea\u548Cb\u65E0\u8FDB\u4F4D\u76F8\u52A0</li><li>(a&amp;b)&gt;&gt;1 \u7B49\u4E8Ea\u548Cb\u7684\u8FDB\u4F4D\u4FE1\u606F</li></ul><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,6),o=[t];function c(l,i){return a(),s("div",null,o)}var k=n(e,[["render",c],["__file","day6.html.vue"]]);export{k as default};