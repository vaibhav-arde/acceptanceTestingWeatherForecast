import { Given, When, Then, And } from 'cucumber';
import assert from 'assert';
import weatherPage from '../../commonFunction/weatherPage';
import { expect } from 'chai';
import { SlowBuffer } from 'buffer';

Given(/^Launch Weather Forecast web application$/, function (){
    weatherPage.open();
    // browser.url('http://localhost:3000/');
    // browser.pause(3000);
    console.log(`I am here`);
});

Then(/^I should be able to launch the application with header "([^"]*)"$/, function (text) {
    // page.h1TextEqual(text);
    let headerText = weatherPage.getHeaderText()
    // console.log(headerText);
    expect(text).to.equal(headerText);
});

When(/^I enter (.*) for weatherforecast$/, function (cityName) {
    weatherPage.clearCityInputField();
    weatherPage.enterCityName(cityName);
    // browser.pause(850)
});

Then(/^As per cityName (.*) wheather forecast to be displayed$/, function (count) {
    let recordLength = weatherPage.numberOfRecords();
    expect(parseInt(count)).to.equal(recordLength);
});

Then(/^I should be able to launch the application with header1 "([^"]*)"$/, function (text) {
    let errorText = weatherPage.getErrorText()
    console.log(errorText);
    expect(text).to.equal(errorText);
});

Then(/^I should able to select a (.*)$/, function (day) {
    weatherPage.onClick(day);
    // let fiveDaysData = weatherPage.fiveDays();
    // let totalDays = fiveDaysData.length;
    // for(let i=1; i<=totalDays; i++){

    // }
    // console.log('totalDays', totalDays);
    // console.log('fiveDaysData', JSON.stringify(fiveDaysData));
});

Then(/^user should see Three hourly forcast for that (.*)$/, function (day) {
    // let eleExpanded = weatherPage.hourlyData(day).isDisplayed();
    // expect(true).to.equal(eleExpanded);
    // console.log('eleExpanded',eleExpanded);
    let eleExpanded2 = weatherPage.checkItemExpanded(day);
    // console.log('eleExpanded2',eleExpanded2);
    expect(true).to.equal(eleExpanded2);
    // browser.pause(3000)
    // page.threeHourDifference(day);
    let threeHRDiff = weatherPage.threeHourDiff(day);
    console.log('threeHRDiff',threeHRDiff);
    expect(true).to.equal(threeHRDiff);
});

Then(/^Status of hourly forecast should be hidden for (.*)$/, function (day) {
    let collapse = weatherPage.checkItemCollapsed(day);
    // console.log('collapse',collapse);
    expect(true).to.equal(collapse);
});

Then(/^For the (.*) maximum temperature should be summarised$/, function(day){
    let summarisedMaxTemp = weatherPage.maxTemp(day);
    // console.log('summarisedMaxTemp', summarisedMaxTemp);
    let calculatedMaxTemp = weatherPage.calMaxTemp(day);
    // console.log('calculatedMaxTemp', calculatedMaxTemp);
    expect(calculatedMaxTemp).to.equal(summarisedMaxTemp);
});

Then(/^For the (.*) minimum temperature should be summarised$/, function(day){
    let summarisedMinTemp = weatherPage.minTemp(day);
    // console.log('summarisedMinTemp', summarisedMinTemp);
    let calculatedMinTemp = weatherPage.calMinTemp(day);
    // console.log('calculatedMinTemp', calculatedMinTemp);
    expect(calculatedMinTemp).to.equal(summarisedMinTemp);
});

Then(/^For the (.*) aggregated rainfall should be validated$/, function(day){
    let summarisedRainFall = weatherPage.rainFall(day);
    // console.log('summarisedMinTemp', summarisedMinTemp);
    let calculatedRainFall = weatherPage.calRainFall(day);
    // console.log('calculatedMinTemp', calculatedMinTemp);
    expect(calculatedRainFall).to.equal(summarisedRainFall);
});

Then(/^For the (.*) dominant wind condition should be validated$/, function(day){
    let summarisedWindCondition = weatherPage.windCondition(day);
    // console.log('summarisedWindCondition', summarisedWindCondition);
    let calculatedWindCondition = weatherPage.calWindCondition(day);
    // console.log('calculatedWindCondition', calculatedWindCondition);
    expect(calculatedWindCondition).to.equal(summarisedWindCondition);
});

Then(/^For the (.*) dominant wind speed should be validated$/, function(day){
    let summarisedWindSpeed = weatherPage.windSpeed(day);
    // console.log('summarisedWindSpeed', summarisedWindSpeed);
    let calculatedWindSpeed = weatherPage.calWindSpeed(day);
    // console.log('calculatedWindSpeed', calculatedWindSpeed);
    expect(calculatedWindSpeed).to.equal(summarisedWindSpeed);
});

Then(/^For the (.*) dominant wind direction should be validated$/, function(day){
    let summarisedWindDir = weatherPage.windDir(day);
    // console.log('summarisedWindDir', summarisedWindDir);
    let calculatedWindDir = weatherPage.calWindDir(day);
    // console.log('calculatedWindDir', calculatedWindDir);
    expect(calculatedWindDir).to.equal(summarisedWindDir);
});

