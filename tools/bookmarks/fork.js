javascript:(function(){
    if(document.getElementById('jswin')){document.getElementById('jswin').remove();return;}
    const s=document.createElement('style');
    s.innerHTML='#jswin{position:fixed;width:450px;height:350px;background:linear-gradient(to bottom,#2b2b2b,#1a1a1a);border:1px solid #333;z-index:999999;top:20px;left:20px;display:flex;flex-direction:column;box-shadow:0 8px 20px rgba(0,0,0,0.5);border-radius:12px;font-family:Roboto,sans-serif;overflow:hidden;resize:both;min-width:300px;min-height:200px}#jshdr{background:linear-gradient(to bottom,#2c2c2c,#1a1a1a);padding:1rem;cursor:move;display:flex;justify-content:space-between;align-items:center;color:#f0f0f0;user-select:none;border-bottom:2px solid #444;box-shadow:0 4px 10px rgba(0,0,0,0.5)}#ace_ed{flex:1;background:#272822 !important}#jsbtn{position:relative;margin:1rem;padding:12px 24px;font-weight:600;color:#f0f0f0;background-color:#444;background-image:linear-gradient(145deg,#383636 0%,#2c2a2a 50%,#212020 100%);border-radius:8px;box-shadow:0px 1px 4px -2px #111;text-shadow:0px -1px #111;border:none;cursor:pointer;overflow:hidden;transition:all 0.3s ease}#jsbtn:hover{background-image:linear-gradient(145deg,#4f4c4c 0%,#3b3838 50%,#2c2a2a 100%);box-shadow:0px 4px 12px rgba(0,0,0,0.5)}#jsbtn::after{content:"";position:absolute;top:2px;left:2px;width:calc(100% - 4px);height:50%;background:linear-gradient(rgba(255,255,255,0.4),rgba(255,255,255,0.1));pointer-events:none;border-radius:8px 8px 0 0}';
    document.head.appendChild(s);
    const w=document.createElement('div');
    w.id='jswin';
    w.innerHTML='<div id="jshdr"><span>JS_CONSOLE (Forked by FelixProfi)</span><b onclick="document.getElementById(\'jswin\').remove()" style="cursor:pointer;padding:0 5px">✕</b></div><div id="ace_ed">console.log(document.title);</div><button id="jsbtn">EXECUTE</button>';
    document.body.appendChild(w);
    const sc=document.createElement('script');
    sc.src='https://cdn.jsdelivr.net/npm/ace-builds@1.43.6/src-min-noconflict/ace.min.js';
    sc.onload=()=>{
        const e=ace.edit("ace_ed",{theme:"ace/theme/monokai",mode:"ace/mode/javascript",fontSize:"14pt",showPrintMargin:false});
        document.getElementById('jsbtn').onclick = () => {
            try {
                eval(e.getValue());
            } catch (err) {
                alert(err.message);
                console.error(err);
            }
        };
    };
    document.head.appendChild(sc);
    let d=false,x,y;
    w.onmousedown=e=>{if(e.target.id=='jshdr'){d=true;x=e.clientX-w.offsetLeft;y=e.clientY-w.offsetTop}};
    document.onmousemove=e=>{if(d){w.style.left=(e.clientX-x)+'px';w.style.top=(e.clientY-y)+'px'}};
    document.onmouseup=()=>d=false;
})();
