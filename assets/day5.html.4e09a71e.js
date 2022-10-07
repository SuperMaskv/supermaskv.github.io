import{_ as t}from"./plugin-vue_export-helper.21dcd24c.js";import{o,c as l,a as n,e as p,b as s,d as e,r as c}from"./app.c24f6bbf.js";var i="/images/algorithm/day5/q2.jpg";const u={},r=n("h1",{id:"day-5",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#day-5","aria-hidden":"true"},"#"),s(" day 5")],-1),k=n("h2",{id:"\u4E24\u6570\u76F8\u52A0",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#\u4E24\u6570\u76F8\u52A0","aria-hidden":"true"},"#"),s(" \u4E24\u6570\u76F8\u52A0")],-1),d={href:"https://leetcode.cn/problems/add-two-numbers/",target:"_blank",rel:"noopener noreferrer"},v=s("\u4E24\u6570\u76F8\u52A0"),m=e(`<div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Q1</span> <span class="token punctuation">{</span>
    <span class="token doc-comment comment">/**
     * https://leetcode.com/problems/add-two-numbers/
     */</span>
    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token keyword">class</span> <span class="token class-name">ListNode</span> <span class="token punctuation">{</span>
        <span class="token keyword">int</span> val<span class="token punctuation">;</span>
        <span class="token class-name">ListNode</span> next<span class="token punctuation">;</span>

        <span class="token class-name">ListNode</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token punctuation">}</span>

        <span class="token class-name">ListNode</span><span class="token punctuation">(</span><span class="token keyword">int</span> val<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">this</span><span class="token punctuation">.</span>val <span class="token operator">=</span> val<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token class-name">ListNode</span><span class="token punctuation">(</span><span class="token keyword">int</span> val<span class="token punctuation">,</span> <span class="token class-name">ListNode</span> next<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">this</span><span class="token punctuation">.</span>val <span class="token operator">=</span> val<span class="token punctuation">;</span>
            <span class="token keyword">this</span><span class="token punctuation">.</span>next <span class="token operator">=</span> next<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token class-name">ListNode</span> <span class="token function">addTwoNumbers</span><span class="token punctuation">(</span><span class="token class-name">ListNode</span> l1<span class="token punctuation">,</span> <span class="token class-name">ListNode</span> l2<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">int</span> len1 <span class="token operator">=</span> <span class="token function">len</span><span class="token punctuation">(</span>l1<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">int</span> len2 <span class="token operator">=</span> <span class="token function">len</span><span class="token punctuation">(</span>l2<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">ListNode</span> lCur <span class="token operator">=</span> len1 <span class="token operator">&gt;</span> len2 <span class="token operator">?</span> l1 <span class="token operator">:</span> l2<span class="token punctuation">;</span>
        <span class="token class-name">ListNode</span> sCur <span class="token operator">=</span> len1 <span class="token operator">&gt;</span> len2 <span class="token operator">?</span> l2 <span class="token operator">:</span> l1<span class="token punctuation">;</span>
        <span class="token class-name">ListNode</span> last <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
        <span class="token keyword">int</span> carry <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
        <span class="token keyword">while</span> <span class="token punctuation">(</span>sCur <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">int</span> curNum <span class="token operator">=</span> lCur<span class="token punctuation">.</span>val <span class="token operator">+</span> sCur<span class="token punctuation">.</span>val <span class="token operator">+</span> carry<span class="token punctuation">;</span>
            lCur<span class="token punctuation">.</span>val <span class="token operator">=</span> curNum <span class="token operator">%</span> <span class="token number">10</span><span class="token punctuation">;</span>
            carry <span class="token operator">=</span> curNum <span class="token operator">/</span> <span class="token number">10</span><span class="token punctuation">;</span>
            last <span class="token operator">=</span> lCur<span class="token punctuation">;</span>
            lCur <span class="token operator">=</span> lCur<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
            sCur <span class="token operator">=</span> sCur<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">while</span> <span class="token punctuation">(</span>lCur <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">int</span> curNum <span class="token operator">=</span> lCur<span class="token punctuation">.</span>val <span class="token operator">+</span> carry<span class="token punctuation">;</span>
            lCur<span class="token punctuation">.</span>val <span class="token operator">=</span> curNum <span class="token operator">%</span> <span class="token number">10</span><span class="token punctuation">;</span>
            carry <span class="token operator">=</span> curNum <span class="token operator">/</span> <span class="token number">10</span><span class="token punctuation">;</span>
            last <span class="token operator">=</span> lCur<span class="token punctuation">;</span>
            lCur <span class="token operator">=</span> lCur<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>carry <span class="token operator">!=</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            last<span class="token punctuation">.</span>next <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ListNode</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> len1 <span class="token operator">&gt;</span> len2 <span class="token operator">?</span> l1 <span class="token operator">:</span> l2<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">private</span> <span class="token keyword">int</span> <span class="token function">len</span><span class="token punctuation">(</span><span class="token class-name">ListNode</span> head<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">int</span> size <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
        <span class="token keyword">while</span> <span class="token punctuation">(</span>head <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            size<span class="token operator">++</span><span class="token punctuation">;</span>
            head <span class="token operator">=</span> head<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> size<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u5408\u5E76\u4E24\u4E2A\u6709\u5E8F\u94FE\u8868" tabindex="-1"><a class="header-anchor" href="#\u5408\u5E76\u4E24\u4E2A\u6709\u5E8F\u94FE\u8868" aria-hidden="true">#</a> \u5408\u5E76\u4E24\u4E2A\u6709\u5E8F\u94FE\u8868</h2>`,2),b={href:"https://leetcode.cn/problems/merge-two-sorted-lists/",target:"_blank",rel:"noopener noreferrer"},y=s("\u5408\u5E76\u4E24\u4E2A\u6709\u5E8F\u94FE\u8868"),w=e('<p>\u5F53\u4E24\u4E2A\u94FE\u8868\u6307\u9488\u5176\u4E2D\u4E00\u4E2A\u6307\u5411null\uFF0C\u9700\u8981\u628Apre.next\u6307\u5411\u53E6\u4E00\u4E2A\u94FE\u8868\u6307\u9488\u3002</p><p><img src="'+i+`" alt="q2"></p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Q2</span> <span class="token punctuation">{</span>
    <span class="token doc-comment comment">/**
     * https://leetcode.cn/problems/merge-two-sorted-lists/
     */</span>
    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token keyword">class</span> <span class="token class-name">ListNode</span> <span class="token punctuation">{</span>
        <span class="token keyword">int</span> val<span class="token punctuation">;</span>
        <span class="token class-name">ListNode</span> next<span class="token punctuation">;</span>

        <span class="token class-name">ListNode</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token punctuation">}</span>

        <span class="token class-name">ListNode</span><span class="token punctuation">(</span><span class="token keyword">int</span> val<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">this</span><span class="token punctuation">.</span>val <span class="token operator">=</span> val<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token class-name">ListNode</span><span class="token punctuation">(</span><span class="token keyword">int</span> val<span class="token punctuation">,</span> <span class="token class-name">ListNode</span> next<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">this</span><span class="token punctuation">.</span>val <span class="token operator">=</span> val<span class="token punctuation">;</span>
            <span class="token keyword">this</span><span class="token punctuation">.</span>next <span class="token operator">=</span> next<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token class-name">ListNode</span> <span class="token function">mergeTwoLists</span><span class="token punctuation">(</span><span class="token class-name">ListNode</span> list1<span class="token punctuation">,</span> <span class="token class-name">ListNode</span> list2<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>list1 <span class="token operator">==</span> <span class="token keyword">null</span> <span class="token operator">||</span> list2 <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> list1 <span class="token operator">==</span> <span class="token keyword">null</span> <span class="token operator">?</span> list2 <span class="token operator">:</span> list1<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token class-name">ListNode</span> head <span class="token operator">=</span> list1<span class="token punctuation">.</span>val <span class="token operator">&lt;</span> list2<span class="token punctuation">.</span>val <span class="token operator">?</span> list1 <span class="token operator">:</span> list2<span class="token punctuation">;</span>
        <span class="token class-name">ListNode</span> pre <span class="token operator">=</span> head<span class="token punctuation">;</span>
        <span class="token class-name">ListNode</span> cur1 <span class="token operator">=</span> head<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
        <span class="token class-name">ListNode</span> cur2 <span class="token operator">=</span> head <span class="token operator">==</span> list1 <span class="token operator">?</span> list2 <span class="token operator">:</span> list1<span class="token punctuation">;</span>
        <span class="token keyword">while</span> <span class="token punctuation">(</span>cur1 <span class="token operator">!=</span> <span class="token keyword">null</span> <span class="token operator">&amp;&amp;</span> cur2 <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>cur1<span class="token punctuation">.</span>val <span class="token operator">&lt;</span> cur2<span class="token punctuation">.</span>val<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                pre<span class="token punctuation">.</span>next <span class="token operator">=</span> cur1<span class="token punctuation">;</span>
                cur1 <span class="token operator">=</span> cur1<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
            <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
                pre<span class="token punctuation">.</span>next <span class="token operator">=</span> cur2<span class="token punctuation">;</span>
                cur2 <span class="token operator">=</span> cur2<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
            pre <span class="token operator">=</span> pre<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        pre<span class="token punctuation">.</span>next <span class="token operator">=</span> cur1 <span class="token operator">==</span> <span class="token keyword">null</span> <span class="token operator">?</span> cur2 <span class="token operator">:</span> cur1<span class="token punctuation">;</span>
        <span class="token keyword">return</span> head<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3);function h(N,_){const a=c("ExternalLinkIcon");return o(),l("div",null,[r,k,n("p",null,[n("a",d,[v,p(a)])]),m,n("p",null,[n("a",b,[y,p(a)])]),w])}var f=t(u,[["render",h],["__file","day5.html.vue"]]);export{f as default};
