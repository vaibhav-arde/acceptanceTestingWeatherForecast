// login.page.js
import Page from './MainPage';

class weatherPage extends Page {

    get headerText() { return $('h1')}
    get getEleByCity() { return $('#city')}
    get forecastRecords(){ return $$('div[style="padding-bottom: 20px;"]')}
    get errorText() { return $('div[data-test="error"]')}
    get daysData() { return $$('span.name[data-test^="day-"]')}
    get threeHourData() { return $$('span.hour[data-test^="hour-1"]')}

    get username() { return $('#username'); }
    get password() { return $('#password'); }
    get submitBtn() { return $('form button[type="submit"]'); }
    get flash() { return $('#flash'); }
    get headerLinks() { return $$('#header a'); }

    open() {
        super.open();
    }

    getHeaderText(){
        return this.headerText.getText();
    }

    clearCityInputField(){
        this.getEleByCity.clearValue();
        browser.pause(800);
    }

    enterCityName(cityName) {
        this.getEleByCity.isDisplayed();
        this.getEleByCity.setValue(cityName);
        browser.keys("\uE007");
    }

    numberOfRecords(){
        return this.forecastRecords.length;
    }

    getErrorText(){
        return this.errorText.getText();
    }

    onClick(day) {
        // this.Day.isDisplayed();
        $(`[data-test='day-${day}']`).click();
        // browser.pause(800);
    };

    fiveDays(){
        return this.daysData
    }

    hourlyData(day){
        return $(`span.hour[data-test^="hour-${day}-1"]`)
    }

    checkItemExpanded(day) {
        browser.pause(800);
        let day1 = parseInt(day, 10) + 1;
        const style = $(`#root > div > div:nth-child(${day1}) > div.details`).getAttribute('style');

        if (!style.includes("max-height: 2000px")) {
            // Assert.fail("3 hourly forecast is hidden");
            console.log(`3 hourly forecast is hidden`);
            return false;
        }

        return true;
    };

    threeHourDiff(day){
        let hrLength = $$(`span.hour[data-test^='hour-${day}']`).length;
        console.log('hrLength', hrLength);
        for(let i=2; i<=hrLength; i++){
            let hr1 = parseInt($(`span.hour[data-test^='hour-${day}-${i-1}']`).getText());
            let hr2 = parseInt($(`span.hour[data-test^='hour-${day}-${i}']`).getText());
            // console.log('hr1', hr1);
            // console.log('hr2', hr2);
            // hr2=hr2 + 2;
            // console.log('hr2', hr2);
            if(hr2-hr1 != 300){
                console.log(`Difference is not of three hours for Day : ${day}, time ${hr1} and ${hr2}`);
                return false;
            }
        }
        return true;
    };

    checkItemCollapsed(day) {
        $(`[data-test='day-${day}']`).click();
        browser.pause('900');
        let day1 = parseInt(day, 10) + 1;
        const style = $(`#root > div > div:nth-child(${day1}) > div.details`).getAttribute('style');
        if (style.includes("max-height: 2000px")) {
            // Assert.fail("3 hourly forecast is hidden");
            console.log(`Day : ${day} is not collapsed`);
            return false;
        }

        return true;
    };

    maxTemp(day){
        // console.log('maxTemp', $(`span.max[data-test="maximum-${day}"]`).getText()); 
        let max = $(`span.max[data-test="maximum-${day}"]`).getText();
        return max.substring(0,max.length-1);
    }

    calMaxTemp(day){
        let arr = [];
        let recordsLength = $$(`span.max[data-test^="maximum-${day}-"]`).length;
        console.log('recordsLength', recordsLength);
        for(let i=1; i<=recordsLength; i++){
            let max = $(`span.max[data-test="maximum-${day}-${i}"]`).getText();
            let temp = max.substring(0,max.length-1)
            console.log('temp', temp);
            arr.push(temp);
        }
        console.log('arr', arr);
        return Math.max(...arr).toString();;
    }

    minTemp(day){
        // console.log('maxTemp', $(`span.max[data-test="maximum-${day}"]`).getText()); 
        let min = $(`span.min[data-test="minimum-${day}"]`).getText();
        return min.substring(0,min.length-1);
    }

    calMinTemp(day){
        let arr = [];
        let recordsLength = $$(`span.min[data-test^="minimum-${day}-"]`).length;
        console.log('recordsLength', recordsLength);
        for(let i=1; i<=recordsLength; i++){
            let min = $(`span.min[data-test="minimum-${day}-${i}"]`).getText();
            let temp = min.substring(0,min.length-1)
            console.log('temp', temp);
            arr.push(temp);
        }
        console.log('arr', arr);
        return Math.min(...arr).toString();;
    }

    rainFall(day){
        let rf = $(`span.rainfall[data-test="rainfall-${day}"]`).getText();
        return parseInt(rf.substring(0,rf.length-2));
    }

    calRainFall(day){
        let arr = [];
        let recordsLength = $$(`span.rainfall[data-test^="rainfall-${day}-"]`).length;
        console.log('recordsLength', recordsLength);
        for(let i=1; i<=recordsLength; i++){
            let rf = $(`span.rainfall[data-test="rainfall-${day}-${i}"]`).getText();
            let temp = parseInt(rf.substring(0,rf.length-2));
            console.log('temp', temp);
            arr.push(temp);
        }
        console.log('arr', arr);
        return arr.reduce((sum, rf) => sum + rf);;
    }

    windCondition(day){
        let wc = $(`svg.icon[data-test="description-${day}"]`).getAttribute("aria-label");
        return wc;
    }

    calWindCondition(day){
        let arr = [];
        let recordsLength = $$(`svg.icon[data-test^="description-${day}-"]`).length;
        console.log('recordsLength', recordsLength);
        for(let i=1; i<=recordsLength; i++){
            let wc = $(`svg.icon[data-test="description-${day}-${i}"]`).getAttribute("aria-label");
            // let temp = parseInt(rf.substring(0,rf.length-2));
            console.log('wc', wc);
            arr.push(wc);
        }
        console.log('arr', arr);

        function mode(arr){
            return arr.sort((a,b) =>
                arr.filter(v => v===a).length
                - arr.filter(v => v===b).length
            ).pop();
        }
        return mode(arr);
    }

    windSpeed(day){
        let ws = $(`span.speed[data-test="speed-${day}"]`).getText();
        return parseInt(ws.substring(0,ws.length-3));
    }

    calWindSpeed(day){
        let arr = [];
        let recordsLength = $$(`span.speed[data-test^="speed-${day}-"]`).length;
        console.log('recordsLength', recordsLength);
        for(let i=1; i<=recordsLength; i++){
            let ws = $(`span.speed[data-test="speed-${day}-${i}"]`).getText();
            let temp = parseInt(ws.substring(0,ws.length-3));
            console.log('temp', temp);
            arr.push(temp);
        }
        console.log('arr', arr);
        return Math.max(...arr);;
    }

    windDir(day){
        let style = $(`span.direction[data-test^="direction-${day}"]>svg`).getAttribute("style");
        console.log('style',style);
        let dir = style.substring(style.length-8,style.length-5);
        console.log('dir',dir);
        return dir;
    }

    calWindDir(day){
        let arr = [];
        let recordsLength = $$(`span.direction[data-test^="direction-${day}-"]>svg`).length;
        console.log('recordsLength', recordsLength);
        for(let i=1; i<=recordsLength; i++){
            let style = $(`span.direction[data-test="direction-${day}-${i}"]>svg`).getAttribute("style");
            let temp = style.substring(style.length-8,style.length-5);
            console.log('temp', temp);
            arr.push(temp);
        }
        console.log('arr', arr);
        return Math.max(...arr);;
    }
}

export default new weatherPage();