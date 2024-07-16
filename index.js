const puppeteer = require('puppeteer');

(async () => {
    // browser 실행
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    // 스크래핑할 페이지로 이동
    await page.goto('https://www.google.com/');

    // 필요한 데이터 추출
    const data = await page.evaluate(() => {
        const element = document.querySelector('div').innerText; //페이지의 div 요소 텍스트 추출
        return {
            element
        };
    });

    console.log(data);

    // 브라우저 종료
    await browser.close();
})();
