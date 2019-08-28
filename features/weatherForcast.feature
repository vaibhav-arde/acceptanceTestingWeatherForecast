@weatherForcast
Feature: As a whetherForecast service provider, I should be able to fetch the whether details from the application successfully

  @complete @Test1
  Scenario Outline: Verify the whetherForecast Application whether use can able to lunch the application or not
    When I open the web url http://localhost:3000/
    Then I should be able to launch the application with header "Five Day Weather Forecast for"
    When I enter the <cityName> for whetherforecast

    Examples:
      | cityName  |
      | aberdeen  |
      | dundee    |
      | edinburgh |
      | glasgow   |
      | perth     |
      | stirling  |
      | delhi     |

  @complete   @testt2Nagative
  Scenario Outline: Verify the whetherForecast Application whether use can able to lunch the application or not
    When I open the web url http://localhost:3000/
    When I enter the <cityName> for whetherforecast
      Then I should be able to launch the application with header1 "Error retrieving the forecast"

      Examples:
        | cityName  |
        | delhi     |

  @complete @test2
  Scenario Outline: Verify that user can able to expand the forecast data and the user is getting forecast after every 3 hours.
    When I open the web url http://localhost:3000/
    Then I should be able to launch the application with header "Five Day Weather Forecast for"
    When I enter the stirling for whetherforecast
    Then I should able to select a <day>
    Then user should see Three hourly forcast for that "<day>"

    Examples:
      | day |
      | 1   |
      | 2   |
      | 3   |
      | 4   |
      | 5   |

  @complete @test3
  Scenario Outline: Verify that user can able to collapse the forecast data.
    When I open the web url http://localhost:3000/
    Then I should be able to launch the application with header "Five Day Weather Forecast for"
    When I enter the edinburgh for whetherforecast
    Then I should able to select a <day>
    Then Status of hourly forecast should be hidden for "<day>"

    Examples:
      | day |
      | 1   |
      | 2   |
      | 3   |
      | 4   |
      | 5   |
  
  @complete @test4
  Scenario Outline: Weather app test
    When I open the web url http://localhost:3000/
    Then I should be able to launch the application with header "Five Day Weather Forecast for"
    When I enter the perth for whetherforecast
    Then I should able to select a <day>

    Examples:
      | day |
      | 1   |
      | 2   |
      | 3   |
      | 4   |
      | 5   |


