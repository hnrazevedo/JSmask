"use strict";
const Mask={
    masks:{"#":"\\d",A:"[A-Z]",a:"[a-z]",S:"[a-zA-Z]",X:"[0-9a-zA-Z]"},
    init(){
        null!=document.querySelector("[data-mask]") && document.querySelectorAll("[data-mask]").forEach(function(a,t){
            Mask.format('[data-mask="'+a.dataset.mask+'"]')
        })
    },
    format(a){
        var t,e=document.querySelector(a);
        function s(a){
            var t,s,n,o,r="",c=e.value;
            for(n=0,o=1;o&&n<a.length;++n)
                t=c.charAt(n),s=a.charAt(n), null != Mask.masks[s] ? new RegExp(Mask.masks[s]).test(t) ? r += t : o = 0 : r += s;
            e.value=r
        }
        t = e.dataset.mask,
        e.maxLength=t.length,
        e.addEventListener("keyup",function(a){8!==a.keyCode&&46!==a.keyCode&&s(t)}),
        e.addEventListener("focus",function(a){s(t)})
    }
};
                
/complete|interactive|loaded/.test(document.readyState) && Mask.init();
