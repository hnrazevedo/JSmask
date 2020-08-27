"use strict";
const Mask={
    masks:{"#":"\\d",A:"[A-Z]",a:"[a-z]",S:"[a-zA-Z]",X:"[0-9a-zA-Z]"},
    start(){
        null !== document.querySelector("[data-mask]") &&
        document.querySelectorAll("[data-mask]").forEach(t=>{Mask.format('[data-mask="'+t.dataset.mask+'"]')})
    },    
    format(t){
        let a=document.querySelector(t), 
        e="";
        e=a.dataset.mask, a.maxLength=e.length,
        a.addEventListener("keyup", function(t){
            8 !== t.keyCode && 46 !== t.keyCode && function(t){
                let e,s,o,d,r="",n=a.value;
                for(o=0,d=1;d&&o<t.length;++o)
                    e=n.charAt(o),
                    s=t.charAt(o),
                    void 0 !== Mask.masks[s]?new RegExp(Mask.masks[s]).test(e) ? r += e : d=0 : r+=s; a.value=r
            }(e)
        })
    }
};

/complete|interactive|loaded/.test(document.readyState) && Mask.start();
