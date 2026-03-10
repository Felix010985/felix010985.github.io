javascript:(function() {
    if (document.getElementById('menu-overlay')) return;

    const style = document.createElement('style');
    style.textContent = `
        .btn-style {
            position: relative; margin-top: auto; display: inline-block; padding: 12px 24px;
            font-weight: 600; text-decoration: none; color: #f0f0f0; font-family: 'Roboto', sans-serif;
            font-size: 1rem; background-color: #444; border-radius: 8px; border: none; cursor: pointer;
            background-image: linear-gradient(145deg, #383636 0%, #2c2a2a 50%, #212020 100%);
            box-shadow: 0px 1px 4px -2px #111; text-shadow: 0px -1px #111;
            overflow: hidden; transition: all 0.3s ease;
        }
        .btn-style::after {
            content: ''; position: absolute; top: 2px; left: 2px; width: calc(100% - 4px); height: 50%;
            background: linear-gradient(rgba(255,255,255,0.4), rgba(255,255,255,0.1));
            pointer-events: none; border-radius: 8px 8px 0 0;
        }
        .btn-style:hover {
            background-image: linear-gradient(145deg, #4f4c4c 0%, #3b3838 50%, #2c2a2a 100%);
            box-shadow: 0px 4px 12px rgba(0,0,0,0.5), 0 0 6px rgba(255,255,255,0.05);
        }
    `;
    document.head.appendChild(style);

    const Scripts = [
        {
            title: 'Инфо страницы',
            desc: 'Показывает заголовок и адрес сайта в алерте',
            btnText: 'Запустить',
            code: () => { alert('Сайт: ' + document.title + '\nURL: ' + location.href); }
        },
        {
            title: 'Инвертировать',
            desc: 'Инвертирует цвета на странице',
            btnText: 'Включить',
            code: () => { document.documentElement.style.filter = 'invert(1) hue-rotate(180deg)'; }
        },
        {
            title: 'Удалить картинки',
            desc: 'Удаляет все картинки на странице',
            btnText: 'Чистка',
            code: () => { document.querySelectorAll('img').forEach(img => img.remove()); }
        }
    ];

    const overlay = document.createElement('div');
    overlay.id = 'menu-overlay';
    Object.assign(overlay.style, {
        position: 'fixed', top: '0', left: '0', width: '100%', height: '100%',
        backgroundColor: 'rgba(0,0,0,0.8)', zIndex: '99999',
        display: 'flex', justifyContent: 'center', alignItems: 'center',
        fontFamily: "'Roboto', sans-serif", overflowY: 'auto'
    });

    const menu = document.createElement('div');
    Object.assign(menu.style, {
        background: '#1a1a1a', padding: '2rem', borderRadius: '12px',
        width: '90%', maxWidth: '800px', border: '2px solid #444',
        boxShadow: '0 10px 30px rgba(0,0,0,0.5)', position: 'relative'
    });

    menu.innerHTML = `
        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:2rem; border-bottom:1px solid #333; padding-bottom:1rem;">
            <h2 style="color:#fff; margin:0;">Меню скриптов</h2>
            <button id="close-menu" style="background:none; border:none; color:#ccc; font-size:30px; cursor:pointer;">&times;</button>
        </div>
        <div id="cards-container" style="display:grid; grid-template-columns:repeat(auto-fit, minmax(240px, 1fr)); gap:1.5rem;"></div>
    `;

    overlay.appendChild(menu);
    document.body.appendChild(overlay);

    const container = menu.querySelector('#cards-container');

    Scripts.forEach(item => {
        const card = document.createElement('section');
        card.style.cssText = `background: linear-gradient(to bottom, #2b2b2b, #1a1a1a); border-radius: 12px; padding: 1.5rem; border: 1px solid #333; display: flex; flex-direction: column; align-items: center; text-align: center;`;

        card.innerHTML = `
            <h3 style="color:#fff; margin-bottom:0.5rem; font-size:1.2rem;">${item.title}</h3>
            <p style="font-size:0.9rem; color:#ccc; margin-bottom:1.5rem; flex-grow:1;">${item.desc}</p>
        `;

        const btn = document.createElement('button');
        btn.className = 'btn-style';
        btn.innerText = item.btnText;
        btn.onclick = item.code;
        
        card.appendChild(btn);
        container.appendChild(card);
    });

    const close = () => { overlay.remove(); style.remove(); };
    document.getElementById('close-menu').onclick = close;
    overlay.onclick = (e) => { if(e.target === overlay) close(); };
})();
