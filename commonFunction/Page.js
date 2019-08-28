import assert from 'assert';
var moment = require('moment')

class Page {
    get getEleByCity() { return $('#city') }
    get getClassByMax() { return $('.max') }
    get hideSummaryClass() { return $('.summary') }
    get getElementH1() { return $('#root > div > h1') }
    get getDetailsByClass() { return $('.details') }
    get NoOfDaysCount() { return $$('//*[@id="root"]/div/div[@style]') }
    get TempElementCount() { return $$(`//*[@id="root"]/div/div[1]/div[2]/div`) }
    get Day() { return $('#root > div > div:nth-child(2) > div.summary > span:nth-child(1)') }
    get WhetherForecastTime() { return $$('#root > div > div:nth-child(2) > div.details > div:nth-child(1) > span:nth-child(1) > span') }

    hideWebElement() {
        browser.pause(800)
        this.hideSummaryClass.getAttribute('hidden');
    }

    MaxTemp() {
        let arrMaxTemp = [];
        this.getClassByMax.forEach(ele => {
            arrMaxTemp.push(ele.getText())
        });
        return arrMaxTemp;
    }

    aggRainfallCheckByDay(day) {
        let arrAggRainFall = [];
        let sumOfAggRainFall = 0;
        const child = (parseInt(day, 10) + 1).toString();
        const aggRainfallValue = $(`#root > div:nth-child(1) > div:nth-child(${child}) > div:nth-child(1) > span:nth-child(5) > span:nth-child(1)`).getText();
        const aggRainfall = aggRainfallValue.substring(0, aggRainfallValue.length - 2);
        const eleSize = $$(`#root > div > div:nth-child(${child}) > div.details > div.detail`).length
        
        for (let i = 1; i < eleSize + 1; i++) {
            const text = $((`#root > div:nth-child(1) > div:nth-child(${child}) > div:nth-child(2) > div:nth-child(${i}) > span:nth-child(5) > span:nth-child(1)`)).getText();
            const aggRain = text.substring(0, text.length - 2)
            sumOfAggRainFall = (parseInt(aggRain, 10) + sumOfAggRainFall + aggRain).toString();
            arrAggRainFall.push(aggRain);
        }

        const aggregate = (arrAggRainFall.reduce((a, c) => Number(a) + Number(c))).toString();
        assert.strictEqual(aggRainfall, aggregate, 'Maximum temp calculation logic is incorrect');
    }

    maxTempCheckByDay(day) {
        let arrMaxTemp = [];
        const child = (parseInt(day, 10) + 1).toString();
        const tempValue = $(`#root > div > div:nth-child(${child}) > div.summary > span:nth-child(3) > span.max`).getText();
        const dailyForcastTemp = tempValue.substring(0, tempValue.length - 1);
        const eleSize = $$(`#root > div > div:nth-child(${child}) > div.details > div.detail`).length
        
        for (let i = 1; i < eleSize + 1; i++) {
            const text = $((`#root > div > div:nth-child(${child}) > div.details > div:nth-child(${i}) > span:nth-child(3) > span.max`)).getText();
            arrMaxTemp.push(text.substring(0, text.length - 1));
        }

        const maxTemp = Math.max(...arrMaxTemp).toString();
        assert.strictEqual(maxTemp, dailyForcastTemp, 'Maximum temp calculation logic is incorrect');
    }

    minTempCheckByDay(day) {
        let arrMinTemp = [];
        const child = (parseInt(day, 10) + 1).toString();
        const valueMinTemp = $(`#root > div:nth-child(1) > div:nth-child(${child}) > div:nth-child(1) > span:nth-child(3) > span:nth-child(2)`).getText();
        const DailyForcastMinTemp = valueMinTemp.substring(0, valueMinTemp.length - 1)
        const eleSize = $$(`#root > div > div:nth-child(${child}) > div.details > div.detail`).length
        
        for (let i = 1; i < eleSize + 1; i++) {
            const text = $((`#root > div > div:nth-child(${child}) > div.details > div:nth-child(${i}) > span:nth-child(3) > span.min`)).getText();
            arrMinTemp.push(text.substring(0, text.length - 1));
        }
        const minTemp = Math.min(...arrMinTemp).toString();
        assert.strictEqual(minTemp, DailyForcastMinTemp, 'Maximum temp calculation logic is incorrect');
    }

    getWindAggregated(day) {
        let arrWindAggregated = [];
        const child = (parseInt(day, 10) + 1).toString();
        const valueDominantCondition = $(`#root > div:nth-child(1) > div:nth-child(${child}) > div:nth-child(1) > span:nth-child(2) > svg:nth-child(1)`).getAttribute("aria-label");
        const eleSize = $$(`#root > div > div:nth-child(${child}) > div.details > div.detail`).length;

        for (let i = 1; i <= eleSize; i++) {
            const text = $((`#root > div:nth-child(1) > div:nth-child(${child}) > div:nth-child(2) > div:nth-child(${i}) > span:nth-child(2) > svg:nth-child(1)`)).getAttribute("aria-label");
            arrWindAggregated.push(text);
        }

        function mode(arrInput) {
            return arrInput.sort((a, b) =>
                arrInput.filter(v => v === a).length
                - arrInput.filter(v => v === b).length
            ).pop();
        }
        let dominatCondition = mode(arrWindAggregated);
        assert.strictEqual(valueDominantCondition, dominatCondition, "Most dominant condition is not matching");
    }

    maxWindByDay(day) {
        let arrMaxWind = [];
        const child = (parseInt(day, 10) + 1).toString();
        const valueDominantConditionWind = $(`#root > div > div:nth-child(${child}) > div.summary > span:nth-child(4) > span.speed`).getText();
        const eleSize = $$(`#root > div > div:nth-child(${child}) > div.details > div.detail`).length;
        
        for (let i = 1; i < eleSize + 1; i++) {
            const text = $((`#root > div > div:nth-child(${child}) > div.details > div:nth-child(${i}) > span:nth-child(4) > span.speed`)).getText();
            arrMaxWind.push(text);
        }

        function mode(arrInput) {
            return arrInput.sort((a, b) =>
                arrInput.filter(v => v === a).length
                - arrInput.filter(v => v === b).length
            ).pop();
        }
        let dominantConditionOfWind = mode(arrMaxWind);
        assert.strictEqual(valueDominantConditionWind, dominantConditionOfWind, "Most dominant wind Constion is not matching");
    }


    threeHourDifference(day) {
        let arrHoursData = [];
        const child = (parseInt(day, 10) + 1).toString();
        const eleSize = $$(`#root > div > div:nth-child(${child}) > div.details > div.detail`).length;

        for (let i = 1; i < eleSize + 1; i++) {
            const text = $((`#root > div > div:nth-child(${child}) > div.details > div:nth-child(${i}) > span:nth-child(1) > span`)).getText();
            arrHoursData.push(text);
        }

        arrHoursData.sort((a, b) => {
            var timeDifference = a - b;
            assert.strictEqual(moment(timeDifference, 'hmm').format('hh'), '03');
        })
    }
    checkItemExpanded(day) {
        browser.pause(800);
        let day1 = parseInt(day, 10) + 1;
        const style = $(`#root > div > div:nth-child(${day1}) > div.details`).getAttribute('style');

        if (!style.includes("max-height: 2000px")) {
            Assert.fail("3 hourly forecast is hidden");
        }
    }

    checkItemCollapsed(day) {
        $(`[data-test='day-${day}']`).click();
        browser.pause('900');
        let day1 = parseInt(day, 10) + 1;
        const style = $(`#root > div > div:nth-child(${day1}) > div.details`).getAttribute('style');
        if (style.includes("max-height: 2000px")) {
            Assert.fail("3 hourly forecast is hidden");
        }
    }

    onClick(day) {
        this.Day.isDisplayed();
        $(`[data-test='day-${day}']`).click();
        browser.pause(800);
    }

    clearCityInputField() {
        this.getEleByCity.clearValue();
        browser.pause(800);
    }

    enterCityName(cityName) {
        this.getEleByCity.isDisplayed();
        this.getEleByCity.setValue(cityName);
        browser.keys("\uE007");
    }

    h1TextEqual(text) {
        let headerText = $('#root > div > h1').getText();
        assert.strictEqual(headerText, text, 'You have landed in wrong page');
    }

    divTextEqual(text) {
        let headerText = $('#root > div > div').getText();
        assert.strictEqual(headerText, text, 'You have landed in wrong page');
    }
}

export default new Page()