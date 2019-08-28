import { When, Then } from 'cucumber';
import assert from 'assert';
import page from '../../commonFunction/Page'

When(/^I open the web url (.*)$/, function (url) {
    browser.url(url);
});

When(/^I enter the (.*) for whetherforecast$/, function (cityName) {
    page.clearCityInputField();
    page.enterCityName(cityName);
    browser.pause(850)
});

Then(/^I should get all whether information for (.*)$/, function (NoOfDays) {
    let actualCount = page.this.NoOfDaysCount.length;
    assert.strictEqual(actualCount, actualCount, 'No of Days forecast not matching')
});

Then(/^I should able to select a (.*)$/, function (day) {
    page.onClick(day);
});

Then(/^I should able to hide forecast data$/, function () {
    page.hideWebElement();
});

Then(/^I should able to get all correct Maximum Temp$/, function () {
    page.MaxTemp();
});

Then(/^user should see Three hourly forcast for that "([^"]*)"$/, function (day) {
    page.checkItemExpanded(day);
    page.threeHourDifference(day);
});

Then(/^Status of hourly forecast should be hidden for "([^"]*)"$/, function (day) {
    page.checkItemCollapsed(day)
});

Then(/^user should see 3hourly forcast for that "([^"]*)"$/, function (day) {
    page.minTempCheckByDay(day);
});

Then(/^I should be able to launch the application with header "([^"]*)"$/, function (text) {
    page.h1TextEqual(text);
});

Then(/^I should be able to launch the application with header1 "([^"]*)"$/, function (text) {
    page.divTextEqual(text);
});