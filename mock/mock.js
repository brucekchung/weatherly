const data = {
  "response": {
    "version": "0.1",
    "termsofService": "http://www.wunderground.com/weather/api/d/terms.html",
    "features": {
      "conditions": 1,
      "forecast10day": 1,
      "hourly": 1
    }
  },
  "current_observation": {
    "image": {
      "url": "http://icons.wxug.com/graphics/wu2/logo_130x80.png",
      "title": "Weather Underground",
      "link": "http://www.wunderground.com"
    },
    "display_location": {
      "full": "San Francisco, CA",
      "city": "San Francisco",
      "state": "CA",
      "state_name": "California",
      "country": "US",
      "country_iso3166": "US",
      "zip": "94102",
      "magic": "1",
      "wmo": "99999",
      "latitude": "37.77999878",
      "longitude": "-122.41999817",
      "elevation": "60.0"
    },
    "observation_location": {
      "full": "SOMA, San Francisco, California",
      "city": "SOMA, San Francisco",
      "state": "California",
      "country": "US",
      "country_iso3166": "US",
      "latitude": "37.778488",
      "longitude": "-122.408005",
      "elevation": "23 ft"
    },
    "estimated": {},
    "station_id": "KCASANFR131",
    "observation_time": "Last Updated on January 4, 12:32 PM PST",
    "observation_time_rfc822": "Thu, 04 Jan 2018 12:32:50 -0800",
    "observation_epoch": "1515097970",
    "local_time_rfc822": "Thu, 04 Jan 2018 12:32:55 -0800",
    "local_epoch": "1515097975",
    "local_tz_short": "PST",
    "local_tz_long": "America/Los_Angeles",
    "local_tz_offset": "-0800",
    "weather": "Overcast",
    "temperature_string": "61.5 F (16.4 C)",
    "temp_f": 61.5,
    "temp_c": 16.4,
    "relative_humidity": "78%",
    "wind_string": "Calm",
    "wind_dir": "North",
    "wind_degrees": -9999,
    "wind_mph": 0,
    "wind_gust_mph": 0,
    "wind_kph": 0,
    "wind_gust_kph": 0,
    "pressure_mb": "1018",
    "pressure_in": "30.08",
    "pressure_trend": "+",
    "dewpoint_string": "55 F (13 C)",
    "dewpoint_f": 55,
    "dewpoint_c": 13,
    "heat_index_string": "NA",
    "heat_index_f": "NA",
    "heat_index_c": "NA",
    "windchill_string": "NA",
    "windchill_f": "NA",
    "windchill_c": "NA",
    "feelslike_string": "61.5 F (16.4 C)",
    "feelslike_f": "61.5",
    "feelslike_c": "16.4",
    "visibility_mi": "6.0",
    "visibility_km": "9.7",
    "solarradiation": "139",
    "UV": "1.2",
    "precip_1hr_string": "0.00 in ( 0 mm)",
    "precip_1hr_in": "0.00",
    "precip_1hr_metric": " 0",
    "precip_today_string": "0.08 in (2 mm)",
    "precip_today_in": "0.08",
    "precip_today_metric": "2",
    "icon": "cloudy",
    "icon_url": "http://icons.wxug.com/i/c/k/cloudy.gif",
    "forecast_url": "http://www.wunderground.com/US/CA/San_Francisco.html",
    "history_url": "http://www.wunderground.com/weatherstation/WXDailyHistory.asp?ID=KCASANFR131",
    "ob_url": "http://www.wunderground.com/cgi-bin/findweather/getForecast?query=37.778488,-122.408005",
    "nowcast": ""
  },
  "forecast": {
    "txt_forecast": {
      "date": "11:34 AM PST",
      "forecastday": [
      {
        "period": 0,
        "icon": "cloudy",
        "icon_url": "http://icons.wxug.com/i/c/k/cloudy.gif",
        "title": "Thursday",
        "fcttext": "Generally cloudy. Slight chance of a rain shower. High 61F. Winds S at 5 to 10 mph.",
        "fcttext_metric": "Generally cloudy. Slight chance of a rain shower. High 16C. Winds S at 10 to 15 km/h.",
        "pop": "20"
      },
      {
        "period": 1,
        "icon": "nt_chancerain",
        "icon_url": "http://icons.wxug.com/i/c/k/nt_chancerain.gif",
        "title": "Thursday Night",
        "fcttext": "Cloudy this evening with showers after midnight. Low 54F. Winds SSE at 5 to 10 mph. Chance of rain 60%.",
        "fcttext_metric": "Cloudy with occasional rain late. Low 12C. Winds SSE at 10 to 15 km/h. Chance of rain 60%.",
        "pop": "60"
      },
      {
        "period": 2,
        "icon": "chancerain",
        "icon_url": "http://icons.wxug.com/i/c/k/chancerain.gif",
        "title": "Friday",
        "fcttext": "Cloudy with occasional light rain. High 57F. Winds SW at 5 to 10 mph. Chance of rain 90%.",
        "fcttext_metric": "Cloudy with occasional light rain. High 14C. Winds SW at 10 to 15 km/h. Chance of rain 90%.",
        "pop": "90"
      },
      {
        "period": 3,
        "icon": "nt_partlycloudy",
        "icon_url": "http://icons.wxug.com/i/c/k/nt_partlycloudy.gif",
        "title": "Friday Night",
        "fcttext": "Cloudy early with partial clearing expected late. Low 48F. Winds light and variable.",
        "fcttext_metric": "Cloudy skies early will become partly cloudy later at night. Low 9C. Winds light and variable.",
        "pop": "20"
      },
      {
        "period": 4,
        "icon": "partlycloudy",
        "icon_url": "http://icons.wxug.com/i/c/k/partlycloudy.gif",
        "title": "Saturday",
        "fcttext": "Partly cloudy skies. High around 55F. Winds NW at 5 to 10 mph.",
        "fcttext_metric": "Some clouds in the morning will give way to mainly sunny skies for the afternoon. High 13C. Winds NW at 10 to 15 km/h.",
        "pop": "10"
      },
      {
        "period": 5,
        "icon": "nt_clear",
        "icon_url": "http://icons.wxug.com/i/c/k/nt_clear.gif",
        "title": "Saturday Night",
        "fcttext": "A mostly clear sky. Low 46F. Winds light and variable.",
        "fcttext_metric": "A mostly clear sky. Low 8C. Winds light and variable.",
        "pop": "10"
      },
      {
        "period": 6,
        "icon": "clear",
        "icon_url": "http://icons.wxug.com/i/c/k/clear.gif",
        "title": "Sunday",
        "fcttext": "Except for a few afternoon clouds, mainly sunny. High 57F. Winds light and variable.",
        "fcttext_metric": "Mostly sunny skies. High 14C. Winds light and variable.",
        "pop": "10"
      },
      {
        "period": 7,
        "icon": "nt_chancerain",
        "icon_url": "http://icons.wxug.com/i/c/k/nt_chancerain.gif",
        "title": "Sunday Night",
        "fcttext": "Overcast with rain showers at times. Low 49F. Winds light and variable. Chance of rain 60%.",
        "fcttext_metric": "Considerable cloudiness with occasional rain showers. Low 9C. Winds light and variable. Chance of rain 60%.",
        "pop": "60"
      },
      {
        "period": 8,
        "icon": "rain",
        "icon_url": "http://icons.wxug.com/i/c/k/rain.gif",
        "title": "Monday",
        "fcttext": "Rain. High 57F. Winds SE at 10 to 15 mph. Chance of rain 90%. Rainfall near a half an inch.",
        "fcttext_metric": "Periods of rain. High 14C. Winds SE at 10 to 15 km/h. Chance of rain 90%. Rainfall around 12mm.",
        "pop": "90"
      },
      {
        "period": 9,
        "icon": "nt_rain",
        "icon_url": "http://icons.wxug.com/i/c/k/nt_rain.gif",
        "title": "Monday Night",
        "fcttext": "Rain. Low 52F. Winds SSE at 10 to 15 mph. Chance of rain 90%. Rainfall near a half an inch.",
        "fcttext_metric": "Periods of rain. Low 11C. Winds SSE at 15 to 25 km/h. Chance of rain 90%. Rainfall around 12mm.",
        "pop": "90"
      },
      {
        "period": 10,
        "icon": "chancerain",
        "icon_url": "http://icons.wxug.com/i/c/k/chancerain.gif",
        "title": "Tuesday",
        "fcttext": "Light rain early...then remaining cloudy with showers in the afternoon. High near 55F. Winds SW at 10 to 15 mph. Chance of rain 60%.",
        "fcttext_metric": "Light rain early...then remaining cloudy with showers in the afternoon. High 13C. Winds WSW at 15 to 25 km/h. Chance of rain 70%.",
        "pop": "60"
      },
      {
        "period": 11,
        "icon": "nt_partlycloudy",
        "icon_url": "http://icons.wxug.com/i/c/k/nt_partlycloudy.gif",
        "title": "Tuesday Night",
        "fcttext": "A few clouds. Low 47F. Winds WNW at 5 to 10 mph.",
        "fcttext_metric": "Clear to partly cloudy. Low 8C. Winds WNW at 10 to 15 km/h.",
        "pop": "20"
      },
      {
        "period": 12,
        "icon": "clear",
        "icon_url": "http://icons.wxug.com/i/c/k/clear.gif",
        "title": "Wednesday",
        "fcttext": "Mostly sunny skies. High 58F. Winds NW at 5 to 10 mph.",
        "fcttext_metric": "Mostly sunny skies. High 14C. Winds NW at 10 to 15 km/h.",
        "pop": "10"
      },
      {
        "period": 13,
        "icon": "nt_clear",
        "icon_url": "http://icons.wxug.com/i/c/k/nt_clear.gif",
        "title": "Wednesday Night",
        "fcttext": "A mostly clear sky. Low 47F. Winds light and variable.",
        "fcttext_metric": "Mainly clear. Low 8C. Winds light and variable.",
        "pop": "10"
      },
      {
        "period": 14,
        "icon": "clear",
        "icon_url": "http://icons.wxug.com/i/c/k/clear.gif",
        "title": "Thursday",
        "fcttext": "Sunny, along with a few afternoon clouds. High 58F. Winds WSW at 5 to 10 mph.",
        "fcttext_metric": "Sunny, along with a few afternoon clouds. High 14C. Winds WSW at 10 to 15 km/h.",
        "pop": "10"
      },
      {
        "period": 15,
        "icon": "nt_partlycloudy",
        "icon_url": "http://icons.wxug.com/i/c/k/nt_partlycloudy.gif",
        "title": "Thursday Night",
        "fcttext": "A few clouds. Low near 45F. Winds light and variable.",
        "fcttext_metric": "A few clouds. Low 7C. Winds light and variable.",
        "pop": "10"
      },
      {
        "period": 16,
        "icon": "clear",
        "icon_url": "http://icons.wxug.com/i/c/k/clear.gif",
        "title": "Friday",
        "fcttext": "Sunshine along with some cloudy intervals. High around 60F. Winds N at 5 to 10 mph.",
        "fcttext_metric": "A few clouds early, otherwise mostly sunny. High 16C. Winds N at 10 to 15 km/h.",
        "pop": "0"
      },
      {
        "period": 17,
        "icon": "nt_clear",
        "icon_url": "http://icons.wxug.com/i/c/k/nt_clear.gif",
        "title": "Friday Night",
        "fcttext": "Mainly clear skies. Low around 45F. Winds light and variable.",
        "fcttext_metric": "Mainly clear skies. Low 7C. Winds light and variable.",
        "pop": "10"
      },
      {
        "period": 18,
        "icon": "partlycloudy",
        "icon_url": "http://icons.wxug.com/i/c/k/partlycloudy.gif",
        "title": "Saturday",
        "fcttext": "Sunshine and clouds mixed. High 61F. Winds N at 5 to 10 mph.",
        "fcttext_metric": "Intervals of clouds and sunshine. High 16C. Winds N at 10 to 15 km/h.",
        "pop": "10"
      },
      {
        "period": 19,
        "icon": "nt_partlycloudy",
        "icon_url": "http://icons.wxug.com/i/c/k/nt_partlycloudy.gif",
        "title": "Saturday Night",
        "fcttext": "Partly cloudy skies. Low 46F. Winds light and variable.",
        "fcttext_metric": "A few clouds from time to time. Low 8C. Winds light and variable.",
        "pop": "0"
      }
      ]
    },
    "simpleforecast": {
      "forecastday": [
      {
        "date": {
          "epoch": "1515121200",
          "pretty": "7:00 PM PST on January 04, 2018",
          "day": 4,
          "month": 1,
          "year": 2018,
          "yday": 3,
          "hour": 19,
          "min": "00",
          "sec": 0,
          "isdst": "0",
          "monthname": "January",
          "monthname_short": "Jan",
          "weekday_short": "Thu",
          "weekday": "Thursday",
          "ampm": "PM",
          "tz_short": "PST",
          "tz_long": "America/Los_Angeles"
        },
        "period": 1,
        "high": {
          "fahrenheit": "61",
          "celsius": "16"
        },
        "low": {
          "fahrenheit": "54",
          "celsius": "12"
        },
        "conditions": "Overcast",
        "icon": "cloudy",
        "icon_url": "http://icons.wxug.com/i/c/k/cloudy.gif",
        "skyicon": "",
        "pop": 20,
        "qpf_allday": {
          "in": 0.09,
          "mm": 2
        },
        "qpf_day": {
          "in": 0,
          "mm": 0
        },
        "qpf_night": {
          "in": 0.09,
          "mm": 2
        },
        "snow_allday": {
          "in": 0,
          "cm": 0
        },
        "snow_day": {
          "in": 0,
          "cm": 0
        },
        "snow_night": {
          "in": 0,
          "cm": 0
        },
        "maxwind": {
          "mph": 10,
          "kph": 16,
          "dir": "S",
          "degrees": 186
        },
        "avewind": {
          "mph": 7,
          "kph": 11,
          "dir": "S",
          "degrees": 186
        },
        "avehumidity": 85,
        "maxhumidity": 91,
        "minhumidity": 81
      },
      {
        "date": {
          "epoch": "1515207600",
          "pretty": "7:00 PM PST on January 05, 2018",
          "day": 5,
          "month": 1,
          "year": 2018,
          "yday": 4,
          "hour": 19,
          "min": "00",
          "sec": 0,
          "isdst": "0",
          "monthname": "January",
          "monthname_short": "Jan",
          "weekday_short": "Fri",
          "weekday": "Friday",
          "ampm": "PM",
          "tz_short": "PST",
          "tz_long": "America/Los_Angeles"
        },
        "period": 2,
        "high": {
          "fahrenheit": "57",
          "celsius": "14"
        },
        "low": {
          "fahrenheit": "48",
          "celsius": "9"
        },
        "conditions": "Chance of Rain",
        "icon": "chancerain",
        "icon_url": "http://icons.wxug.com/i/c/k/chancerain.gif",
        "skyicon": "",
        "pop": 90,
        "qpf_allday": {
          "in": 0.15,
          "mm": 4
        },
        "qpf_day": {
          "in": 0.15,
          "mm": 4
        },
        "qpf_night": {
          "in": 0,
          "mm": 0
        },
        "snow_allday": {
          "in": 0,
          "cm": 0
        },
        "snow_day": {
          "in": 0,
          "cm": 0
        },
        "snow_night": {
          "in": 0,
          "cm": 0
        },
        "maxwind": {
          "mph": 10,
          "kph": 16,
          "dir": "SW",
          "degrees": 221
        },
        "avewind": {
          "mph": 8,
          "kph": 13,
          "dir": "SW",
          "degrees": 221
        },
        "avehumidity": 96,
        "maxhumidity": 100,
        "minhumidity": 92
      },
      {
        "date": {
          "epoch": "1515294000",
          "pretty": "7:00 PM PST on January 06, 2018",
          "day": 6,
          "month": 1,
          "year": 2018,
          "yday": 5,
          "hour": 19,
          "min": "00",
          "sec": 0,
          "isdst": "0",
          "monthname": "January",
          "monthname_short": "Jan",
          "weekday_short": "Sat",
          "weekday": "Saturday",
          "ampm": "PM",
          "tz_short": "PST",
          "tz_long": "America/Los_Angeles"
        },
        "period": 3,
        "high": {
          "fahrenheit": "55",
          "celsius": "13"
        },
        "low": {
          "fahrenheit": "46",
          "celsius": "8"
        },
        "conditions": "Partly Cloudy",
        "icon": "partlycloudy",
        "icon_url": "http://icons.wxug.com/i/c/k/partlycloudy.gif",
        "skyicon": "",
        "pop": 10,
        "qpf_allday": {
          "in": 0,
          "mm": 0
        },
        "qpf_day": {
          "in": 0,
          "mm": 0
        },
        "qpf_night": {
          "in": 0,
          "mm": 0
        },
        "snow_allday": {
          "in": 0,
          "cm": 0
        },
        "snow_day": {
          "in": 0,
          "cm": 0
        },
        "snow_night": {
          "in": 0,
          "cm": 0
        },
        "maxwind": {
          "mph": 10,
          "kph": 16,
          "dir": "NW",
          "degrees": 309
        },
        "avewind": {
          "mph": 7,
          "kph": 11,
          "dir": "NW",
          "degrees": 309
        },
        "avehumidity": 88,
        "maxhumidity": 97,
        "minhumidity": 80
      },
      {
        "date": {
          "epoch": "1515380400",
          "pretty": "7:00 PM PST on January 07, 2018",
          "day": 7,
          "month": 1,
          "year": 2018,
          "yday": 6,
          "hour": 19,
          "min": "00",
          "sec": 0,
          "isdst": "0",
          "monthname": "January",
          "monthname_short": "Jan",
          "weekday_short": "Sun",
          "weekday": "Sunday",
          "ampm": "PM",
          "tz_short": "PST",
          "tz_long": "America/Los_Angeles"
        },
        "period": 4,
        "high": {
          "fahrenheit": "57",
          "celsius": "14"
        },
        "low": {
          "fahrenheit": "49",
          "celsius": "9"
        },
        "conditions": "Clear",
        "icon": "clear",
        "icon_url": "http://icons.wxug.com/i/c/k/clear.gif",
        "skyicon": "",
        "pop": 10,
        "qpf_allday": {
          "in": 0.07,
          "mm": 2
        },
        "qpf_day": {
          "in": 0,
          "mm": 0
        },
        "qpf_night": {
          "in": 0.07,
          "mm": 2
        },
        "snow_allday": {
          "in": 0,
          "cm": 0
        },
        "snow_day": {
          "in": 0,
          "cm": 0
        },
        "snow_night": {
          "in": 0,
          "cm": 0
        },
        "maxwind": {
          "mph": 5,
          "kph": 8,
          "dir": "N",
          "degrees": 357
        },
        "avewind": {
          "mph": 4,
          "kph": 6,
          "dir": "N",
          "degrees": 357
        },
        "avehumidity": 84,
        "maxhumidity": 92,
        "minhumidity": 74
      },
      {
        "date": {
          "epoch": "1515466800",
          "pretty": "7:00 PM PST on January 08, 2018",
          "day": 8,
          "month": 1,
          "year": 2018,
          "yday": 7,
          "hour": 19,
          "min": "00",
          "sec": 0,
          "isdst": "0",
          "monthname": "January",
          "monthname_short": "Jan",
          "weekday_short": "Mon",
          "weekday": "Monday",
          "ampm": "PM",
          "tz_short": "PST",
          "tz_long": "America/Los_Angeles"
        },
        "period": 5,
        "high": {
          "fahrenheit": "57",
          "celsius": "14"
        },
        "low": {
          "fahrenheit": "52",
          "celsius": "11"
        },
        "conditions": "Rain",
        "icon": "rain",
        "icon_url": "http://icons.wxug.com/i/c/k/rain.gif",
        "skyicon": "",
        "pop": 90,
        "qpf_allday": {
          "in": 1.23,
          "mm": 31
        },
        "qpf_day": {
          "in": 0.54,
          "mm": 14
        },
        "qpf_night": {
          "in": 0.69,
          "mm": 18
        },
        "snow_allday": {
          "in": 0,
          "cm": 0
        },
        "snow_day": {
          "in": 0,
          "cm": 0
        },
        "snow_night": {
          "in": 0,
          "cm": 0
        },
        "maxwind": {
          "mph": 15,
          "kph": 24,
          "dir": "SE",
          "degrees": 143
        },
        "avewind": {
          "mph": 10,
          "kph": 16,
          "dir": "SE",
          "degrees": 143
        },
        "avehumidity": 86,
        "maxhumidity": 90,
        "minhumidity": 80
      },
      {
        "date": {
          "epoch": "1515553200",
          "pretty": "7:00 PM PST on January 09, 2018",
          "day": 9,
          "month": 1,
          "year": 2018,
          "yday": 8,
          "hour": 19,
          "min": "00",
          "sec": 0,
          "isdst": "0",
          "monthname": "January",
          "monthname_short": "Jan",
          "weekday_short": "Tue",
          "weekday": "Tuesday",
          "ampm": "PM",
          "tz_short": "PST",
          "tz_long": "America/Los_Angeles"
        },
        "period": 6,
        "high": {
          "fahrenheit": "55",
          "celsius": "13"
        },
        "low": {
          "fahrenheit": "47",
          "celsius": "8"
        },
        "conditions": "Chance of Rain",
        "icon": "chancerain",
        "icon_url": "http://icons.wxug.com/i/c/k/chancerain.gif",
        "skyicon": "",
        "pop": 60,
        "qpf_allday": {
          "in": 0.12,
          "mm": 3
        },
        "qpf_day": {
          "in": 0.12,
          "mm": 3
        },
        "qpf_night": {
          "in": 0,
          "mm": 0
        },
        "snow_allday": {
          "in": 0,
          "cm": 0
        },
        "snow_day": {
          "in": 0,
          "cm": 0
        },
        "snow_night": {
          "in": 0,
          "cm": 0
        },
        "maxwind": {
          "mph": 15,
          "kph": 24,
          "dir": "SW",
          "degrees": 236
        },
        "avewind": {
          "mph": 10,
          "kph": 16,
          "dir": "SW",
          "degrees": 236
        },
        "avehumidity": 84,
        "maxhumidity": 89,
        "minhumidity": 79
      },
      {
        "date": {
          "epoch": "1515639600",
          "pretty": "7:00 PM PST on January 10, 2018",
          "day": 10,
          "month": 1,
          "year": 2018,
          "yday": 9,
          "hour": 19,
          "min": "00",
          "sec": 0,
          "isdst": "0",
          "monthname": "January",
          "monthname_short": "Jan",
          "weekday_short": "Wed",
          "weekday": "Wednesday",
          "ampm": "PM",
          "tz_short": "PST",
          "tz_long": "America/Los_Angeles"
        },
        "period": 7,
        "high": {
          "fahrenheit": "58",
          "celsius": "14"
        },
        "low": {
          "fahrenheit": "47",
          "celsius": "8"
        },
        "conditions": "Clear",
        "icon": "clear",
        "icon_url": "http://icons.wxug.com/i/c/k/clear.gif",
        "skyicon": "",
        "pop": 10,
        "qpf_allday": {
          "in": 0,
          "mm": 0
        },
        "qpf_day": {
          "in": 0,
          "mm": 0
        },
        "qpf_night": {
          "in": 0,
          "mm": 0
        },
        "snow_allday": {
          "in": 0,
          "cm": 0
        },
        "snow_day": {
          "in": 0,
          "cm": 0
        },
        "snow_night": {
          "in": 0,
          "cm": 0
        },
        "maxwind": {
          "mph": 10,
          "kph": 16,
          "dir": "NW",
          "degrees": 324
        },
        "avewind": {
          "mph": 8,
          "kph": 13,
          "dir": "NW",
          "degrees": 324
        },
        "avehumidity": 86,
        "maxhumidity": 93,
        "minhumidity": 75
      },
      {
        "date": {
          "epoch": "1515726000",
          "pretty": "7:00 PM PST on January 11, 2018",
          "day": 11,
          "month": 1,
          "year": 2018,
          "yday": 10,
          "hour": 19,
          "min": "00",
          "sec": 0,
          "isdst": "0",
          "monthname": "January",
          "monthname_short": "Jan",
          "weekday_short": "Thu",
          "weekday": "Thursday",
          "ampm": "PM",
          "tz_short": "PST",
          "tz_long": "America/Los_Angeles"
        },
        "period": 8,
        "high": {
          "fahrenheit": "58",
          "celsius": "14"
        },
        "low": {
          "fahrenheit": "45",
          "celsius": "7"
        },
        "conditions": "Clear",
        "icon": "clear",
        "icon_url": "http://icons.wxug.com/i/c/k/clear.gif",
        "skyicon": "",
        "pop": 10,
        "qpf_allday": {
          "in": 0,
          "mm": 0
        },
        "qpf_day": {
          "in": 0,
          "mm": 0
        },
        "qpf_night": {
          "in": 0,
          "mm": 0
        },
        "snow_allday": {
          "in": 0,
          "cm": 0
        },
        "snow_day": {
          "in": 0,
          "cm": 0
        },
        "snow_night": {
          "in": 0,
          "cm": 0
        },
        "maxwind": {
          "mph": 10,
          "kph": 16,
          "dir": "WSW",
          "degrees": 254
        },
        "avewind": {
          "mph": 6,
          "kph": 10,
          "dir": "WSW",
          "degrees": 254
        },
        "avehumidity": 87,
        "maxhumidity": 94,
        "minhumidity": 76
      },
      {
        "date": {
          "epoch": "1515812400",
          "pretty": "7:00 PM PST on January 12, 2018",
          "day": 12,
          "month": 1,
          "year": 2018,
          "yday": 11,
          "hour": 19,
          "min": "00",
          "sec": 0,
          "isdst": "0",
          "monthname": "January",
          "monthname_short": "Jan",
          "weekday_short": "Fri",
          "weekday": "Friday",
          "ampm": "PM",
          "tz_short": "PST",
          "tz_long": "America/Los_Angeles"
        },
        "period": 9,
        "high": {
          "fahrenheit": "60",
          "celsius": "16"
        },
        "low": {
          "fahrenheit": "45",
          "celsius": "7"
        },
        "conditions": "Clear",
        "icon": "clear",
        "icon_url": "http://icons.wxug.com/i/c/k/clear.gif",
        "skyicon": "",
        "pop": 0,
        "qpf_allday": {
          "in": 0,
          "mm": 0
        },
        "qpf_day": {
          "in": 0,
          "mm": 0
        },
        "qpf_night": {
          "in": 0,
          "mm": 0
        },
        "snow_allday": {
          "in": 0,
          "cm": 0
        },
        "snow_day": {
          "in": 0,
          "cm": 0
        },
        "snow_night": {
          "in": 0,
          "cm": 0
        },
        "maxwind": {
          "mph": 10,
          "kph": 16,
          "dir": "N",
          "degrees": 7
        },
        "avewind": {
          "mph": 7,
          "kph": 11,
          "dir": "N",
          "degrees": 7
        },
        "avehumidity": 84,
        "maxhumidity": 97,
        "minhumidity": 68
      },
      {
        "date": {
          "epoch": "1515898800",
          "pretty": "7:00 PM PST on January 13, 2018",
          "day": 13,
          "month": 1,
          "year": 2018,
          "yday": 12,
          "hour": 19,
          "min": "00",
          "sec": 0,
          "isdst": "0",
          "monthname": "January",
          "monthname_short": "Jan",
          "weekday_short": "Sat",
          "weekday": "Saturday",
          "ampm": "PM",
          "tz_short": "PST",
          "tz_long": "America/Los_Angeles"
        },
        "period": 10,
        "high": {
          "fahrenheit": "61",
          "celsius": "16"
        },
        "low": {
          "fahrenheit": "46",
          "celsius": "8"
        },
        "conditions": "Partly Cloudy",
        "icon": "partlycloudy",
        "icon_url": "http://icons.wxug.com/i/c/k/partlycloudy.gif",
        "skyicon": "",
        "pop": 10,
        "qpf_allday": {
          "in": 0,
          "mm": 0
        },
        "qpf_day": {
          "in": 0,
          "mm": 0
        },
        "qpf_night": {
          "in": 0,
          "mm": 0
        },
        "snow_allday": {
          "in": 0,
          "cm": 0
        },
        "snow_day": {
          "in": 0,
          "cm": 0
        },
        "snow_night": {
          "in": 0,
          "cm": 0
        },
        "maxwind": {
          "mph": 10,
          "kph": 16,
          "dir": "N",
          "degrees": 2
        },
        "avewind": {
          "mph": 6,
          "kph": 10,
          "dir": "N",
          "degrees": 2
        },
        "avehumidity": 81,
        "maxhumidity": 95,
        "minhumidity": 65
      }
      ]
    }
  },
  "hourly_forecast": [
  {
    "FCTTIME": {
      "hour": "13",
      "hour_padded": "13",
      "min": "00",
      "min_unpadded": "0",
      "sec": "0",
      "year": "2018",
      "mon": "1",
      "mon_padded": "01",
      "mon_abbrev": "Jan",
      "mday": "4",
      "mday_padded": "04",
      "yday": "3",
      "isdst": "0",
      "epoch": "1515099600",
      "pretty": "1:00 PM PST on January 04, 2018",
      "civil": "1:00 PM",
      "month_name": "January",
      "month_name_abbrev": "Jan",
      "weekday_name": "Thursday",
      "weekday_name_night": "Thursday Night",
      "weekday_name_abbrev": "Thu",
      "weekday_name_unlang": "Thursday",
      "weekday_name_night_unlang": "Thursday Night",
      "ampm": "PM",
      "tz": "",
      "age": "",
      "UTCDATE": ""
    },
    "temp": {
      "english": "59",
      "metric": "15"
    },
    "dewpoint": {
      "english": "54",
      "metric": "12"
    },
    "condition": "Overcast",
    "icon": "cloudy",
    "icon_url": "http://icons.wxug.com/i/c/k/cloudy.gif",
    "fctcode": "4",
    "sky": "88",
    "wspd": {
      "english": "5",
      "metric": "8"
    },
    "wdir": {
      "dir": "S",
      "degrees": "190"
    },
    "wx": "Cloudy",
    "uvi": "1",
    "humidity": "83",
    "windchill": {
      "english": "-9999",
      "metric": "-9999"
    },
    "heatindex": {
      "english": "-9999",
      "metric": "-9999"
    },
    "feelslike": {
      "english": "59",
      "metric": "15"
    },
    "qpf": {
      "english": "0.0",
      "metric": "0"
    },
    "snow": {
      "english": "0.0",
      "metric": "0"
    },
    "pop": "15",
    "mslp": {
      "english": "30.06",
      "metric": "1018"
    }
  },
  {
    "FCTTIME": {
      "hour": "14",
      "hour_padded": "14",
      "min": "00",
      "min_unpadded": "0",
      "sec": "0",
      "year": "2018",
      "mon": "1",
      "mon_padded": "01",
      "mon_abbrev": "Jan",
      "mday": "4",
      "mday_padded": "04",
      "yday": "3",
      "isdst": "0",
      "epoch": "1515103200",
      "pretty": "2:00 PM PST on January 04, 2018",
      "civil": "2:00 PM",
      "month_name": "January",
      "month_name_abbrev": "Jan",
      "weekday_name": "Thursday",
      "weekday_name_night": "Thursday Night",
      "weekday_name_abbrev": "Thu",
      "weekday_name_unlang": "Thursday",
      "weekday_name_night_unlang": "Thursday Night",
      "ampm": "PM",
      "tz": "",
      "age": "",
      "UTCDATE": ""
    },
    "temp": {
      "english": "60",
      "metric": "16"
    },
    "dewpoint": {
      "english": "54",
      "metric": "12"
    },
    "condition": "Overcast",
    "icon": "cloudy",
    "icon_url": "http://icons.wxug.com/i/c/k/cloudy.gif",
    "fctcode": "4",
    "sky": "83",
    "wspd": {
      "english": "6",
      "metric": "10"
    },
    "wdir": {
      "dir": "S",
      "degrees": "189"
    },
    "wx": "Cloudy",
    "uvi": "1",
    "humidity": "81",
    "windchill": {
      "english": "-9999",
      "metric": "-9999"
    },
    "heatindex": {
      "english": "-9999",
      "metric": "-9999"
    },
    "feelslike": {
      "english": "60",
      "metric": "16"
    },
    "qpf": {
      "english": "0.0",
      "metric": "0"
    },
    "snow": {
      "english": "0.0",
      "metric": "0"
    },
    "pop": "15",
    "mslp": {
      "english": "30.06",
      "metric": "1018"
    }
  },
  {
    "FCTTIME": {
      "hour": "15",
      "hour_padded": "15",
      "min": "00",
      "min_unpadded": "0",
      "sec": "0",
      "year": "2018",
      "mon": "1",
      "mon_padded": "01",
      "mon_abbrev": "Jan",
      "mday": "4",
      "mday_padded": "04",
      "yday": "3",
      "isdst": "0",
      "epoch": "1515106800",
      "pretty": "3:00 PM PST on January 04, 2018",
      "civil": "3:00 PM",
      "month_name": "January",
      "month_name_abbrev": "Jan",
      "weekday_name": "Thursday",
      "weekday_name_night": "Thursday Night",
      "weekday_name_abbrev": "Thu",
      "weekday_name_unlang": "Thursday",
      "weekday_name_night_unlang": "Thursday Night",
      "ampm": "PM",
      "tz": "",
      "age": "",
      "UTCDATE": ""
    },
    "temp": {
      "english": "60",
      "metric": "16"
    },
    "dewpoint": {
      "english": "55",
      "metric": "13"
    },
    "condition": "Mostly Cloudy",
    "icon": "mostlycloudy",
    "icon_url": "http://icons.wxug.com/i/c/k/mostlycloudy.gif",
    "fctcode": "3",
    "sky": "75",
    "wspd": {
      "english": "7",
      "metric": "11"
    },
    "wdir": {
      "dir": "S",
      "degrees": "186"
    },
    "wx": "Mostly Cloudy",
    "uvi": "1",
    "humidity": "81",
    "windchill": {
      "english": "-9999",
      "metric": "-9999"
    },
    "heatindex": {
      "english": "-9999",
      "metric": "-9999"
    },
    "feelslike": {
      "english": "60",
      "metric": "16"
    },
    "qpf": {
      "english": "0.0",
      "metric": "0"
    },
    "snow": {
      "english": "0.0",
      "metric": "0"
    },
    "pop": "15",
    "mslp": {
      "english": "30.06",
      "metric": "1018"
    }
  },
  {
    "FCTTIME": {
      "hour": "16",
      "hour_padded": "16",
      "min": "00",
      "min_unpadded": "0",
      "sec": "0",
      "year": "2018",
      "mon": "1",
      "mon_padded": "01",
      "mon_abbrev": "Jan",
      "mday": "4",
      "mday_padded": "04",
      "yday": "3",
      "isdst": "0",
      "epoch": "1515110400",
      "pretty": "4:00 PM PST on January 04, 2018",
      "civil": "4:00 PM",
      "month_name": "January",
      "month_name_abbrev": "Jan",
      "weekday_name": "Thursday",
      "weekday_name_night": "Thursday Night",
      "weekday_name_abbrev": "Thu",
      "weekday_name_unlang": "Thursday",
      "weekday_name_night_unlang": "Thursday Night",
      "ampm": "PM",
      "tz": "",
      "age": "",
      "UTCDATE": ""
    },
    "temp": {
      "english": "61",
      "metric": "16"
    },
    "dewpoint": {
      "english": "55",
      "metric": "13"
    },
    "condition": "Partly Cloudy",
    "icon": "partlycloudy",
    "icon_url": "http://icons.wxug.com/i/c/k/partlycloudy.gif",
    "fctcode": "2",
    "sky": "50",
    "wspd": {
      "english": "8",
      "metric": "13"
    },
    "wdir": {
      "dir": "S",
      "degrees": "185"
    },
    "wx": "Partly Cloudy",
    "uvi": "0",
    "humidity": "81",
    "windchill": {
      "english": "-9999",
      "metric": "-9999"
    },
    "heatindex": {
      "english": "-9999",
      "metric": "-9999"
    },
    "feelslike": {
      "english": "61",
      "metric": "16"
    },
    "qpf": {
      "english": "0.0",
      "metric": "0"
    },
    "snow": {
      "english": "0.0",
      "metric": "0"
    },
    "pop": "7",
    "mslp": {
      "english": "30.06",
      "metric": "1018"
    }
  },
  {
    "FCTTIME": {
      "hour": "17",
      "hour_padded": "17",
      "min": "00",
      "min_unpadded": "0",
      "sec": "0",
      "year": "2018",
      "mon": "1",
      "mon_padded": "01",
      "mon_abbrev": "Jan",
      "mday": "4",
      "mday_padded": "04",
      "yday": "3",
      "isdst": "0",
      "epoch": "1515114000",
      "pretty": "5:00 PM PST on January 04, 2018",
      "civil": "5:00 PM",
      "month_name": "January",
      "month_name_abbrev": "Jan",
      "weekday_name": "Thursday",
      "weekday_name_night": "Thursday Night",
      "weekday_name_abbrev": "Thu",
      "weekday_name_unlang": "Thursday",
      "weekday_name_night_unlang": "Thursday Night",
      "ampm": "PM",
      "tz": "",
      "age": "",
      "UTCDATE": ""
    },
    "temp": {
      "english": "60",
      "metric": "16"
    },
    "dewpoint": {
      "english": "55",
      "metric": "13"
    },
    "condition": "Partly Cloudy",
    "icon": "partlycloudy",
    "icon_url": "http://icons.wxug.com/i/c/k/partlycloudy.gif",
    "fctcode": "2",
    "sky": "42",
    "wspd": {
      "english": "7",
      "metric": "11"
    },
    "wdir": {
      "dir": "S",
      "degrees": "180"
    },
    "wx": "Partly Cloudy",
    "uvi": "0",
    "humidity": "85",
    "windchill": {
      "english": "-9999",
      "metric": "-9999"
    },
    "heatindex": {
      "english": "-9999",
      "metric": "-9999"
    },
    "feelslike": {
      "english": "60",
      "metric": "16"
    },
    "qpf": {
      "english": "0.0",
      "metric": "0"
    },
    "snow": {
      "english": "0.0",
      "metric": "0"
    },
    "pop": "16",
    "mslp": {
      "english": "30.07",
      "metric": "1018"
    }
  },
  {
    "FCTTIME": {
      "hour": "18",
      "hour_padded": "18",
      "min": "00",
      "min_unpadded": "0",
      "sec": "0",
      "year": "2018",
      "mon": "1",
      "mon_padded": "01",
      "mon_abbrev": "Jan",
      "mday": "4",
      "mday_padded": "04",
      "yday": "3",
      "isdst": "0",
      "epoch": "1515117600",
      "pretty": "6:00 PM PST on January 04, 2018",
      "civil": "6:00 PM",
      "month_name": "January",
      "month_name_abbrev": "Jan",
      "weekday_name": "Thursday",
      "weekday_name_night": "Thursday Night",
      "weekday_name_abbrev": "Thu",
      "weekday_name_unlang": "Thursday",
      "weekday_name_night_unlang": "Thursday Night",
      "ampm": "PM",
      "tz": "",
      "age": "",
      "UTCDATE": ""
    },
    "temp": {
      "english": "59",
      "metric": "15"
    },
    "dewpoint": {
      "english": "55",
      "metric": "13"
    },
    "condition": "Partly Cloudy",
    "icon": "partlycloudy",
    "icon_url": "http://icons.wxug.com/i/c/k/nt_partlycloudy.gif",
    "fctcode": "2",
    "sky": "41",
    "wspd": {
      "english": "7",
      "metric": "11"
    },
    "wdir": {
      "dir": "S",
      "degrees": "173"
    },
    "wx": "Partly Cloudy",
    "uvi": "0",
    "humidity": "87",
    "windchill": {
      "english": "-9999",
      "metric": "-9999"
    },
    "heatindex": {
      "english": "-9999",
      "metric": "-9999"
    },
    "feelslike": {
      "english": "59",
      "metric": "15"
    },
    "qpf": {
      "english": "0.0",
      "metric": "0"
    },
    "snow": {
      "english": "0.0",
      "metric": "0"
    },
    "pop": "20",
    "mslp": {
      "english": "30.08",
      "metric": "1019"
    }
  },
  {
    "FCTTIME": {
      "hour": "19",
      "hour_padded": "19",
      "min": "00",
      "min_unpadded": "0",
      "sec": "0",
      "year": "2018",
      "mon": "1",
      "mon_padded": "01",
      "mon_abbrev": "Jan",
      "mday": "4",
      "mday_padded": "04",
      "yday": "3",
      "isdst": "0",
      "epoch": "1515121200",
      "pretty": "7:00 PM PST on January 04, 2018",
      "civil": "7:00 PM",
      "month_name": "January",
      "month_name_abbrev": "Jan",
      "weekday_name": "Thursday",
      "weekday_name_night": "Thursday Night",
      "weekday_name_abbrev": "Thu",
      "weekday_name_unlang": "Thursday",
      "weekday_name_night_unlang": "Thursday Night",
      "ampm": "PM",
      "tz": "",
      "age": "",
      "UTCDATE": ""
    },
    "temp": {
      "english": "59",
      "metric": "15"
    },
    "dewpoint": {
      "english": "55",
      "metric": "13"
    },
    "condition": "Mostly Cloudy",
    "icon": "mostlycloudy",
    "icon_url": "http://icons.wxug.com/i/c/k/nt_mostlycloudy.gif",
    "fctcode": "3",
    "sky": "60",
    "wspd": {
      "english": "6",
      "metric": "10"
    },
    "wdir": {
      "dir": "S",
      "degrees": "171"
    },
    "wx": "Mostly Cloudy",
    "uvi": "0",
    "humidity": "88",
    "windchill": {
      "english": "-9999",
      "metric": "-9999"
    },
    "heatindex": {
      "english": "-9999",
      "metric": "-9999"
    },
    "feelslike": {
      "english": "59",
      "metric": "15"
    },
    "qpf": {
      "english": "0.0",
      "metric": "0"
    },
    "snow": {
      "english": "0.0",
      "metric": "0"
    },
    "pop": "19",
    "mslp": {
      "english": "30.09",
      "metric": "1019"
    }
  },
  {
    "FCTTIME": {
      "hour": "20",
      "hour_padded": "20",
      "min": "00",
      "min_unpadded": "0",
      "sec": "0",
      "year": "2018",
      "mon": "1",
      "mon_padded": "01",
      "mon_abbrev": "Jan",
      "mday": "4",
      "mday_padded": "04",
      "yday": "3",
      "isdst": "0",
      "epoch": "1515124800",
      "pretty": "8:00 PM PST on January 04, 2018",
      "civil": "8:00 PM",
      "month_name": "January",
      "month_name_abbrev": "Jan",
      "weekday_name": "Thursday",
      "weekday_name_night": "Thursday Night",
      "weekday_name_abbrev": "Thu",
      "weekday_name_unlang": "Thursday",
      "weekday_name_night_unlang": "Thursday Night",
      "ampm": "PM",
      "tz": "",
      "age": "",
      "UTCDATE": ""
    },
    "temp": {
      "english": "58",
      "metric": "14"
    },
    "dewpoint": {
      "english": "55",
      "metric": "13"
    },
    "condition": "Mostly Cloudy",
    "icon": "mostlycloudy",
    "icon_url": "http://icons.wxug.com/i/c/k/nt_mostlycloudy.gif",
    "fctcode": "3",
    "sky": "61",
    "wspd": {
      "english": "6",
      "metric": "10"
    },
    "wdir": {
      "dir": "S",
      "degrees": "171"
    },
    "wx": "Mostly Cloudy",
    "uvi": "0",
    "humidity": "88",
    "windchill": {
      "english": "-9999",
      "metric": "-9999"
    },
    "heatindex": {
      "english": "-9999",
      "metric": "-9999"
    },
    "feelslike": {
      "english": "58",
      "metric": "14"
    },
    "qpf": {
      "english": "0.0",
      "metric": "0"
    },
    "snow": {
      "english": "0.0",
      "metric": "0"
    },
    "pop": "16",
    "mslp": {
      "english": "30.1",
      "metric": "1019"
    }
  },
  {
    "FCTTIME": {
      "hour": "21",
      "hour_padded": "21",
      "min": "00",
      "min_unpadded": "0",
      "sec": "0",
      "year": "2018",
      "mon": "1",
      "mon_padded": "01",
      "mon_abbrev": "Jan",
      "mday": "4",
      "mday_padded": "04",
      "yday": "3",
      "isdst": "0",
      "epoch": "1515128400",
      "pretty": "9:00 PM PST on January 04, 2018",
      "civil": "9:00 PM",
      "month_name": "January",
      "month_name_abbrev": "Jan",
      "weekday_name": "Thursday",
      "weekday_name_night": "Thursday Night",
      "weekday_name_abbrev": "Thu",
      "weekday_name_unlang": "Thursday",
      "weekday_name_night_unlang": "Thursday Night",
      "ampm": "PM",
      "tz": "",
      "age": "",
      "UTCDATE": ""
    },
    "temp": {
      "english": "58",
      "metric": "14"
    },
    "dewpoint": {
      "english": "55",
      "metric": "13"
    },
    "condition": "Mostly Cloudy",
    "icon": "mostlycloudy",
    "icon_url": "http://icons.wxug.com/i/c/k/nt_mostlycloudy.gif",
    "fctcode": "3",
    "sky": "65",
    "wspd": {
      "english": "6",
      "metric": "10"
    },
    "wdir": {
      "dir": "SSE",
      "degrees": "167"
    },
    "wx": "Mostly Cloudy",
    "uvi": "0",
    "humidity": "88",
    "windchill": {
      "english": "-9999",
      "metric": "-9999"
    },
    "heatindex": {
      "english": "-9999",
      "metric": "-9999"
    },
    "feelslike": {
      "english": "58",
      "metric": "14"
    },
    "qpf": {
      "english": "0.0",
      "metric": "0"
    },
    "snow": {
      "english": "0.0",
      "metric": "0"
    },
    "pop": "15",
    "mslp": {
      "english": "30.12",
      "metric": "1020"
    }
  },
  {
    "FCTTIME": {
      "hour": "22",
      "hour_padded": "22",
      "min": "00",
      "min_unpadded": "0",
      "sec": "0",
      "year": "2018",
      "mon": "1",
      "mon_padded": "01",
      "mon_abbrev": "Jan",
      "mday": "4",
      "mday_padded": "04",
      "yday": "3",
      "isdst": "0",
      "epoch": "1515132000",
      "pretty": "10:00 PM PST on January 04, 2018",
      "civil": "10:00 PM",
      "month_name": "January",
      "month_name_abbrev": "Jan",
      "weekday_name": "Thursday",
      "weekday_name_night": "Thursday Night",
      "weekday_name_abbrev": "Thu",
      "weekday_name_unlang": "Thursday",
      "weekday_name_night_unlang": "Thursday Night",
      "ampm": "PM",
      "tz": "",
      "age": "",
      "UTCDATE": ""
    },
    "temp": {
      "english": "58",
      "metric": "14"
    },
    "dewpoint": {
      "english": "55",
      "metric": "13"
    },
    "condition": "Mostly Cloudy",
    "icon": "mostlycloudy",
    "icon_url": "http://icons.wxug.com/i/c/k/nt_mostlycloudy.gif",
    "fctcode": "3",
    "sky": "69",
    "wspd": {
      "english": "7",
      "metric": "11"
    },
    "wdir": {
      "dir": "SSE",
      "degrees": "163"
    },
    "wx": "Mostly Cloudy",
    "uvi": "0",
    "humidity": "90",
    "windchill": {
      "english": "-9999",
      "metric": "-9999"
    },
    "heatindex": {
      "english": "-9999",
      "metric": "-9999"
    },
    "feelslike": {
      "english": "58",
      "metric": "14"
    },
    "qpf": {
      "english": "0.0",
      "metric": "0"
    },
    "snow": {
      "english": "0.0",
      "metric": "0"
    },
    "pop": "15",
    "mslp": {
      "english": "30.13",
      "metric": "1020"
    }
  },
  {
    "FCTTIME": {
      "hour": "23",
      "hour_padded": "23",
      "min": "00",
      "min_unpadded": "0",
      "sec": "0",
      "year": "2018",
      "mon": "1",
      "mon_padded": "01",
      "mon_abbrev": "Jan",
      "mday": "4",
      "mday_padded": "04",
      "yday": "3",
      "isdst": "0",
      "epoch": "1515135600",
      "pretty": "11:00 PM PST on January 04, 2018",
      "civil": "11:00 PM",
      "month_name": "January",
      "month_name_abbrev": "Jan",
      "weekday_name": "Thursday",
      "weekday_name_night": "Thursday Night",
      "weekday_name_abbrev": "Thu",
      "weekday_name_unlang": "Thursday",
      "weekday_name_night_unlang": "Thursday Night",
      "ampm": "PM",
      "tz": "",
      "age": "",
      "UTCDATE": ""
    },
    "temp": {
      "english": "57",
      "metric": "14"
    },
    "dewpoint": {
      "english": "55",
      "metric": "13"
    },
    "condition": "Overcast",
    "icon": "cloudy",
    "icon_url": "http://icons.wxug.com/i/c/k/nt_cloudy.gif",
    "fctcode": "4",
    "sky": "86",
    "wspd": {
      "english": "7",
      "metric": "11"
    },
    "wdir": {
      "dir": "SSE",
      "degrees": "166"
    },
    "wx": "Cloudy",
    "uvi": "0",
    "humidity": "91",
    "windchill": {
      "english": "-9999",
      "metric": "-9999"
    },
    "heatindex": {
      "english": "-9999",
      "metric": "-9999"
    },
    "feelslike": {
      "english": "57",
      "metric": "14"
    },
    "qpf": {
      "english": "0.0",
      "metric": "0"
    },
    "snow": {
      "english": "0.0",
      "metric": "0"
    },
    "pop": "15",
    "mslp": {
      "english": "30.14",
      "metric": "1021"
    }
  },
  {
    "FCTTIME": {
      "hour": "0",
      "hour_padded": "00",
      "min": "00",
      "min_unpadded": "0",
      "sec": "0",
      "year": "2018",
      "mon": "1",
      "mon_padded": "01",
      "mon_abbrev": "Jan",
      "mday": "5",
      "mday_padded": "05",
      "yday": "4",
      "isdst": "0",
      "epoch": "1515139200",
      "pretty": "12:00 AM PST on January 05, 2018",
      "civil": "12:00 AM",
      "month_name": "January",
      "month_name_abbrev": "Jan",
      "weekday_name": "Friday",
      "weekday_name_night": "Friday Night",
      "weekday_name_abbrev": "Fri",
      "weekday_name_unlang": "Friday",
      "weekday_name_night_unlang": "Friday Night",
      "ampm": "AM",
      "tz": "",
      "age": "",
      "UTCDATE": ""
    },
    "temp": {
      "english": "57",
      "metric": "14"
    },
    "dewpoint": {
      "english": "55",
      "metric": "13"
    },
    "condition": "Chance of Rain",
    "icon": "chancerain",
    "icon_url": "http://icons.wxug.com/i/c/k/nt_chancerain.gif",
    "fctcode": "12",
    "sky": "80",
    "wspd": {
      "english": "8",
      "metric": "13"
    },
    "wdir": {
      "dir": "SSE",
      "degrees": "166"
    },
    "wx": "Few Showers",
    "uvi": "0",
    "humidity": "93",
    "windchill": {
      "english": "-9999",
      "metric": "-9999"
    },
    "heatindex": {
      "english": "-9999",
      "metric": "-9999"
    },
    "feelslike": {
      "english": "57",
      "metric": "14"
    },
    "qpf": {
      "english": "0.0",
      "metric": "0"
    },
    "snow": {
      "english": "0.0",
      "metric": "0"
    },
    "pop": "30",
    "mslp": {
      "english": "30.14",
      "metric": "1021"
    }
  },
  {
    "FCTTIME": {
      "hour": "1",
      "hour_padded": "01",
      "min": "00",
      "min_unpadded": "0",
      "sec": "0",
      "year": "2018",
      "mon": "1",
      "mon_padded": "01",
      "mon_abbrev": "Jan",
      "mday": "5",
      "mday_padded": "05",
      "yday": "4",
      "isdst": "0",
      "epoch": "1515142800",
      "pretty": "1:00 AM PST on January 05, 2018",
      "civil": "1:00 AM",
      "month_name": "January",
      "month_name_abbrev": "Jan",
      "weekday_name": "Friday",
      "weekday_name_night": "Friday Night",
      "weekday_name_abbrev": "Fri",
      "weekday_name_unlang": "Friday",
      "weekday_name_night_unlang": "Friday Night",
      "ampm": "AM",
      "tz": "",
      "age": "",
      "UTCDATE": ""
    },
    "temp": {
      "english": "56",
      "metric": "13"
    },
    "dewpoint": {
      "english": "55",
      "metric": "13"
    },
    "condition": "Chance of Rain",
    "icon": "chancerain",
    "icon_url": "http://icons.wxug.com/i/c/k/nt_chancerain.gif",
    "fctcode": "12",
    "sky": "83",
    "wspd": {
      "english": "8",
      "metric": "13"
    },
    "wdir": {
      "dir": "SSE",
      "degrees": "162"
    },
    "wx": "Showers",
    "uvi": "0",
    "humidity": "95",
    "windchill": {
      "english": "-9999",
      "metric": "-9999"
    },
    "heatindex": {
      "english": "-9999",
      "metric": "-9999"
    },
    "feelslike": {
      "english": "56",
      "metric": "13"
    },
    "qpf": {
      "english": "0.0",
      "metric": "0"
    },
    "snow": {
      "english": "0.0",
      "metric": "0"
    },
    "pop": "42",
    "mslp": {
      "english": "30.15",
      "metric": "1021"
    }
  },
  {
    "FCTTIME": {
      "hour": "2",
      "hour_padded": "02",
      "min": "00",
      "min_unpadded": "0",
      "sec": "0",
      "year": "2018",
      "mon": "1",
      "mon_padded": "01",
      "mon_abbrev": "Jan",
      "mday": "5",
      "mday_padded": "05",
      "yday": "4",
      "isdst": "0",
      "epoch": "1515146400",
      "pretty": "2:00 AM PST on January 05, 2018",
      "civil": "2:00 AM",
      "month_name": "January",
      "month_name_abbrev": "Jan",
      "weekday_name": "Friday",
      "weekday_name_night": "Friday Night",
      "weekday_name_abbrev": "Fri",
      "weekday_name_unlang": "Friday",
      "weekday_name_night_unlang": "Friday Night",
      "ampm": "AM",
      "tz": "",
      "age": "",
      "UTCDATE": ""
    },
    "temp": {
      "english": "56",
      "metric": "13"
    },
    "dewpoint": {
      "english": "54",
      "metric": "12"
    },
    "condition": "Chance of Rain",
    "icon": "chancerain",
    "icon_url": "http://icons.wxug.com/i/c/k/nt_chancerain.gif",
    "fctcode": "12",
    "sky": "82",
    "wspd": {
      "english": "8",
      "metric": "13"
    },
    "wdir": {
      "dir": "SSE",
      "degrees": "159"
    },
    "wx": "Showers",
    "uvi": "0",
    "humidity": "95",
    "windchill": {
      "english": "-9999",
      "metric": "-9999"
    },
    "heatindex": {
      "english": "-9999",
      "metric": "-9999"
    },
    "feelslike": {
      "english": "56",
      "metric": "13"
    },
    "qpf": {
      "english": "0.0",
      "metric": "0"
    },
    "snow": {
      "english": "0.0",
      "metric": "0"
    },
    "pop": "40",
    "mslp": {
      "english": "30.14",
      "metric": "1021"
    }
  },
  {
    "FCTTIME": {
      "hour": "3",
      "hour_padded": "03",
      "min": "00",
      "min_unpadded": "0",
      "sec": "0",
      "year": "2018",
      "mon": "1",
      "mon_padded": "01",
      "mon_abbrev": "Jan",
      "mday": "5",
      "mday_padded": "05",
      "yday": "4",
      "isdst": "0",
      "epoch": "1515150000",
      "pretty": "3:00 AM PST on January 05, 2018",
      "civil": "3:00 AM",
      "month_name": "January",
      "month_name_abbrev": "Jan",
      "weekday_name": "Friday",
      "weekday_name_night": "Friday Night",
      "weekday_name_abbrev": "Fri",
      "weekday_name_unlang": "Friday",
      "weekday_name_night_unlang": "Friday Night",
      "ampm": "AM",
      "tz": "",
      "age": "",
      "UTCDATE": ""
    },
    "temp": {
      "english": "56",
      "metric": "13"
    },
    "dewpoint": {
      "english": "54",
      "metric": "12"
    },
    "condition": "Chance of Rain",
    "icon": "chancerain",
    "icon_url": "http://icons.wxug.com/i/c/k/nt_chancerain.gif",
    "fctcode": "12",
    "sky": "84",
    "wspd": {
      "english": "7",
      "metric": "11"
    },
    "wdir": {
      "dir": "SSE",
      "degrees": "153"
    },
    "wx": "Showers",
    "uvi": "0",
    "humidity": "95",
    "windchill": {
      "english": "-9999",
      "metric": "-9999"
    },
    "heatindex": {
      "english": "-9999",
      "metric": "-9999"
    },
    "feelslike": {
      "english": "56",
      "metric": "13"
    },
    "qpf": {
      "english": "0.01",
      "metric": "0"
    },
    "snow": {
      "english": "0.0",
      "metric": "0"
    },
    "pop": "41",
    "mslp": {
      "english": "30.14",
      "metric": "1021"
    }
  },
  {
    "FCTTIME": {
      "hour": "4",
      "hour_padded": "04",
      "min": "00",
      "min_unpadded": "0",
      "sec": "0",
      "year": "2018",
      "mon": "1",
      "mon_padded": "01",
      "mon_abbrev": "Jan",
      "mday": "5",
      "mday_padded": "05",
      "yday": "4",
      "isdst": "0",
      "epoch": "1515153600",
      "pretty": "4:00 AM PST on January 05, 2018",
      "civil": "4:00 AM",
      "month_name": "January",
      "month_name_abbrev": "Jan",
      "weekday_name": "Friday",
      "weekday_name_night": "Friday Night",
      "weekday_name_abbrev": "Fri",
      "weekday_name_unlang": "Friday",
      "weekday_name_night_unlang": "Friday Night",
      "ampm": "AM",
      "tz": "",
      "age": "",
      "UTCDATE": ""
    },
    "temp": {
      "english": "56",
      "metric": "13"
    },
    "dewpoint": {
      "english": "55",
      "metric": "13"
    },
    "condition": "Chance of Rain",
    "icon": "chancerain",
    "icon_url": "http://icons.wxug.com/i/c/k/nt_chancerain.gif",
    "fctcode": "12",
    "sky": "86",
    "wspd": {
      "english": "8",
      "metric": "13"
    },
    "wdir": {
      "dir": "SSE",
      "degrees": "157"
    },
    "wx": "Showers",
    "uvi": "0",
    "humidity": "95",
    "windchill": {
      "english": "-9999",
      "metric": "-9999"
    },
    "heatindex": {
      "english": "-9999",
      "metric": "-9999"
    },
    "feelslike": {
      "english": "56",
      "metric": "13"
    },
    "qpf": {
      "english": "0.03",
      "metric": "1"
    },
    "snow": {
      "english": "0.0",
      "metric": "0"
    },
    "pop": "53",
    "mslp": {
      "english": "30.14",
      "metric": "1021"
    }
  },
  {
    "FCTTIME": {
      "hour": "5",
      "hour_padded": "05",
      "min": "00",
      "min_unpadded": "0",
      "sec": "0",
      "year": "2018",
      "mon": "1",
      "mon_padded": "01",
      "mon_abbrev": "Jan",
      "mday": "5",
      "mday_padded": "05",
      "yday": "4",
      "isdst": "0",
      "epoch": "1515157200",
      "pretty": "5:00 AM PST on January 05, 2018",
      "civil": "5:00 AM",
      "month_name": "January",
      "month_name_abbrev": "Jan",
      "weekday_name": "Friday",
      "weekday_name_night": "Friday Night",
      "weekday_name_abbrev": "Fri",
      "weekday_name_unlang": "Friday",
      "weekday_name_night_unlang": "Friday Night",
      "ampm": "AM",
      "tz": "",
      "age": "",
      "UTCDATE": ""
    },
    "temp": {
      "english": "56",
      "metric": "13"
    },
    "dewpoint": {
      "english": "55",
      "metric": "13"
    },
    "condition": "Chance of Rain",
    "icon": "chancerain",
    "icon_url": "http://icons.wxug.com/i/c/k/nt_chancerain.gif",
    "fctcode": "12",
    "sky": "96",
    "wspd": {
      "english": "8",
      "metric": "13"
    },
    "wdir": {
      "dir": "SSE",
      "degrees": "161"
    },
    "wx": "Light Rain",
    "uvi": "0",
    "humidity": "95",
    "windchill": {
      "english": "-9999",
      "metric": "-9999"
    },
    "heatindex": {
      "english": "-9999",
      "metric": "-9999"
    },
    "feelslike": {
      "english": "56",
      "metric": "13"
    },
    "qpf": {
      "english": "0.02",
      "metric": "1"
    },
    "snow": {
      "english": "0.0",
      "metric": "0"
    },
    "pop": "60",
    "mslp": {
      "english": "30.14",
      "metric": "1021"
    }
  },
  {
    "FCTTIME": {
      "hour": "6",
      "hour_padded": "06",
      "min": "00",
      "min_unpadded": "0",
      "sec": "0",
      "year": "2018",
      "mon": "1",
      "mon_padded": "01",
      "mon_abbrev": "Jan",
      "mday": "5",
      "mday_padded": "05",
      "yday": "4",
      "isdst": "0",
      "epoch": "1515160800",
      "pretty": "6:00 AM PST on January 05, 2018",
      "civil": "6:00 AM",
      "month_name": "January",
      "month_name_abbrev": "Jan",
      "weekday_name": "Friday",
      "weekday_name_night": "Friday Night",
      "weekday_name_abbrev": "Fri",
      "weekday_name_unlang": "Friday",
      "weekday_name_night_unlang": "Friday Night",
      "ampm": "AM",
      "tz": "",
      "age": "",
      "UTCDATE": ""
    },
    "temp": {
      "english": "56",
      "metric": "13"
    },
    "dewpoint": {
      "english": "55",
      "metric": "13"
    },
    "condition": "Chance of Rain",
    "icon": "chancerain",
    "icon_url": "http://icons.wxug.com/i/c/k/nt_chancerain.gif",
    "fctcode": "12",
    "sky": "95",
    "wspd": {
      "english": "7",
      "metric": "11"
    },
    "wdir": {
      "dir": "S",
      "degrees": "170"
    },
    "wx": "Showers",
    "uvi": "0",
    "humidity": "96",
    "windchill": {
      "english": "-9999",
      "metric": "-9999"
    },
    "heatindex": {
      "english": "-9999",
      "metric": "-9999"
    },
    "feelslike": {
      "english": "56",
      "metric": "13"
    },
    "qpf": {
      "english": "0.02",
      "metric": "1"
    },
    "snow": {
      "english": "0.0",
      "metric": "0"
    },
    "pop": "59",
    "mslp": {
      "english": "30.15",
      "metric": "1021"
    }
  },
  {
    "FCTTIME": {
      "hour": "7",
      "hour_padded": "07",
      "min": "00",
      "min_unpadded": "0",
      "sec": "0",
      "year": "2018",
      "mon": "1",
      "mon_padded": "01",
      "mon_abbrev": "Jan",
      "mday": "5",
      "mday_padded": "05",
      "yday": "4",
      "isdst": "0",
      "epoch": "1515164400",
      "pretty": "7:00 AM PST on January 05, 2018",
      "civil": "7:00 AM",
      "month_name": "January",
      "month_name_abbrev": "Jan",
      "weekday_name": "Friday",
      "weekday_name_night": "Friday Night",
      "weekday_name_abbrev": "Fri",
      "weekday_name_unlang": "Friday",
      "weekday_name_night_unlang": "Friday Night",
      "ampm": "AM",
      "tz": "",
      "age": "",
      "UTCDATE": ""
    },
    "temp": {
      "english": "55",
      "metric": "13"
    },
    "dewpoint": {
      "english": "55",
      "metric": "13"
    },
    "condition": "Chance of Rain",
    "icon": "chancerain",
    "icon_url": "http://icons.wxug.com/i/c/k/nt_chancerain.gif",
    "fctcode": "12",
    "sky": "93",
    "wspd": {
      "english": "8",
      "metric": "13"
    },
    "wdir": {
      "dir": "S",
      "degrees": "171"
    },
    "wx": "Showers",
    "uvi": "0",
    "humidity": "98",
    "windchill": {
      "english": "-9999",
      "metric": "-9999"
    },
    "heatindex": {
      "english": "-9999",
      "metric": "-9999"
    },
    "feelslike": {
      "english": "55",
      "metric": "13"
    },
    "qpf": {
      "english": "0.01",
      "metric": "0"
    },
    "snow": {
      "english": "0.0",
      "metric": "0"
    },
    "pop": "45",
    "mslp": {
      "english": "30.16",
      "metric": "1021"
    }
  },
  {
    "FCTTIME": {
      "hour": "8",
      "hour_padded": "08",
      "min": "00",
      "min_unpadded": "0",
      "sec": "0",
      "year": "2018",
      "mon": "1",
      "mon_padded": "01",
      "mon_abbrev": "Jan",
      "mday": "5",
      "mday_padded": "05",
      "yday": "4",
      "isdst": "0",
      "epoch": "1515168000",
      "pretty": "8:00 AM PST on January 05, 2018",
      "civil": "8:00 AM",
      "month_name": "January",
      "month_name_abbrev": "Jan",
      "weekday_name": "Friday",
      "weekday_name_night": "Friday Night",
      "weekday_name_abbrev": "Fri",
      "weekday_name_unlang": "Friday",
      "weekday_name_night_unlang": "Friday Night",
      "ampm": "AM",
      "tz": "",
      "age": "",
      "UTCDATE": ""
    },
    "temp": {
      "english": "55",
      "metric": "13"
    },
    "dewpoint": {
      "english": "55",
      "metric": "13"
    },
    "condition": "Chance of Rain",
    "icon": "chancerain",
    "icon_url": "http://icons.wxug.com/i/c/k/chancerain.gif",
    "fctcode": "12",
    "sky": "92",
    "wspd": {
      "english": "7",
      "metric": "11"
    },
    "wdir": {
      "dir": "SSE",
      "degrees": "168"
    },
    "wx": "Showers",
    "uvi": "0",
    "humidity": "100",
    "windchill": {
      "english": "-9999",
      "metric": "-9999"
    },
    "heatindex": {
      "english": "-9999",
      "metric": "-9999"
    },
    "feelslike": {
      "english": "55",
      "metric": "13"
    },
    "qpf": {
      "english": "0.01",
      "metric": "0"
    },
    "snow": {
      "english": "0.0",
      "metric": "0"
    },
    "pop": "47",
    "mslp": {
      "english": "30.18",
      "metric": "1022"
    }
  },
  {
    "FCTTIME": {
      "hour": "9",
      "hour_padded": "09",
      "min": "00",
      "min_unpadded": "0",
      "sec": "0",
      "year": "2018",
      "mon": "1",
      "mon_padded": "01",
      "mon_abbrev": "Jan",
      "mday": "5",
      "mday_padded": "05",
      "yday": "4",
      "isdst": "0",
      "epoch": "1515171600",
      "pretty": "9:00 AM PST on January 05, 2018",
      "civil": "9:00 AM",
      "month_name": "January",
      "month_name_abbrev": "Jan",
      "weekday_name": "Friday",
      "weekday_name_night": "Friday Night",
      "weekday_name_abbrev": "Fri",
      "weekday_name_unlang": "Friday",
      "weekday_name_night_unlang": "Friday Night",
      "ampm": "AM",
      "tz": "",
      "age": "",
      "UTCDATE": ""
    },
    "temp": {
      "english": "56",
      "metric": "13"
    },
    "dewpoint": {
      "english": "56",
      "metric": "13"
    },
    "condition": "Chance of Rain",
    "icon": "chancerain",
    "icon_url": "http://icons.wxug.com/i/c/k/chancerain.gif",
    "fctcode": "12",
    "sky": "94",
    "wspd": {
      "english": "6",
      "metric": "10"
    },
    "wdir": {
      "dir": "S",
      "degrees": "180"
    },
    "wx": "Showers",
    "uvi": "0",
    "humidity": "100",
    "windchill": {
      "english": "-9999",
      "metric": "-9999"
    },
    "heatindex": {
      "english": "-9999",
      "metric": "-9999"
    },
    "feelslike": {
      "english": "56",
      "metric": "13"
    },
    "qpf": {
      "english": "0.01",
      "metric": "0"
    },
    "snow": {
      "english": "0.0",
      "metric": "0"
    },
    "pop": "49",
    "mslp": {
      "english": "30.2",
      "metric": "1023"
    }
  },
  {
    "FCTTIME": {
      "hour": "10",
      "hour_padded": "10",
      "min": "00",
      "min_unpadded": "0",
      "sec": "0",
      "year": "2018",
      "mon": "1",
      "mon_padded": "01",
      "mon_abbrev": "Jan",
      "mday": "5",
      "mday_padded": "05",
      "yday": "4",
      "isdst": "0",
      "epoch": "1515175200",
      "pretty": "10:00 AM PST on January 05, 2018",
      "civil": "10:00 AM",
      "month_name": "January",
      "month_name_abbrev": "Jan",
      "weekday_name": "Friday",
      "weekday_name_night": "Friday Night",
      "weekday_name_abbrev": "Fri",
      "weekday_name_unlang": "Friday",
      "weekday_name_night_unlang": "Friday Night",
      "ampm": "AM",
      "tz": "",
      "age": "",
      "UTCDATE": ""
    },
    "temp": {
      "english": "57",
      "metric": "14"
    },
    "dewpoint": {
      "english": "57",
      "metric": "14"
    },
    "condition": "Chance of Rain",
    "icon": "chancerain",
    "icon_url": "http://icons.wxug.com/i/c/k/chancerain.gif",
    "fctcode": "12",
    "sky": "96",
    "wspd": {
      "english": "7",
      "metric": "11"
    },
    "wdir": {
      "dir": "SSW",
      "degrees": "194"
    },
    "wx": "Showers",
    "uvi": "0",
    "humidity": "100",
    "windchill": {
      "english": "-9999",
      "metric": "-9999"
    },
    "heatindex": {
      "english": "-9999",
      "metric": "-9999"
    },
    "feelslike": {
      "english": "57",
      "metric": "14"
    },
    "qpf": {
      "english": "0.01",
      "metric": "0"
    },
    "snow": {
      "english": "0.0",
      "metric": "0"
    },
    "pop": "55",
    "mslp": {
      "english": "30.21",
      "metric": "1023"
    }
  },
  {
    "FCTTIME": {
      "hour": "11",
      "hour_padded": "11",
      "min": "00",
      "min_unpadded": "0",
      "sec": "0",
      "year": "2018",
      "mon": "1",
      "mon_padded": "01",
      "mon_abbrev": "Jan",
      "mday": "5",
      "mday_padded": "05",
      "yday": "4",
      "isdst": "0",
      "epoch": "1515178800",
      "pretty": "11:00 AM PST on January 05, 2018",
      "civil": "11:00 AM",
      "month_name": "January",
      "month_name_abbrev": "Jan",
      "weekday_name": "Friday",
      "weekday_name_night": "Friday Night",
      "weekday_name_abbrev": "Fri",
      "weekday_name_unlang": "Friday",
      "weekday_name_night_unlang": "Friday Night",
      "ampm": "AM",
      "tz": "",
      "age": "",
      "UTCDATE": ""
    },
    "temp": {
      "english": "57",
      "metric": "14"
    },
    "dewpoint": {
      "english": "57",
      "metric": "14"
    },
    "condition": "Chance of Rain",
    "icon": "chancerain",
    "icon_url": "http://icons.wxug.com/i/c/k/chancerain.gif",
    "fctcode": "12",
    "sky": "96",
    "wspd": {
      "english": "8",
      "metric": "13"
    },
    "wdir": {
      "dir": "SSW",
      "degrees": "208"
    },
    "wx": "Light Rain",
    "uvi": "1",
    "humidity": "100",
    "windchill": {
      "english": "-9999",
      "metric": "-9999"
    },
    "heatindex": {
      "english": "-9999",
      "metric": "-9999"
    },
    "feelslike": {
      "english": "57",
      "metric": "14"
    },
    "qpf": {
      "english": "0.01",
      "metric": "0"
    },
    "snow": {
      "english": "0.0",
      "metric": "0"
    },
    "pop": "63",
    "mslp": {
      "english": "30.22",
      "metric": "1023"
    }
  },
  {
    "FCTTIME": {
      "hour": "12",
      "hour_padded": "12",
      "min": "00",
      "min_unpadded": "0",
      "sec": "0",
      "year": "2018",
      "mon": "1",
      "mon_padded": "01",
      "mon_abbrev": "Jan",
      "mday": "5",
      "mday_padded": "05",
      "yday": "4",
      "isdst": "0",
      "epoch": "1515182400",
      "pretty": "12:00 PM PST on January 05, 2018",
      "civil": "12:00 PM",
      "month_name": "January",
      "month_name_abbrev": "Jan",
      "weekday_name": "Friday",
      "weekday_name_night": "Friday Night",
      "weekday_name_abbrev": "Fri",
      "weekday_name_unlang": "Friday",
      "weekday_name_night_unlang": "Friday Night",
      "ampm": "PM",
      "tz": "",
      "age": "",
      "UTCDATE": ""
    },
    "temp": {
      "english": "57",
      "metric": "14"
    },
    "dewpoint": {
      "english": "56",
      "metric": "13"
    },
    "condition": "Chance of Rain",
    "icon": "chancerain",
    "icon_url": "http://icons.wxug.com/i/c/k/chancerain.gif",
    "fctcode": "12",
    "sky": "95",
    "wspd": {
      "english": "8",
      "metric": "13"
    },
    "wdir": {
      "dir": "SW",
      "degrees": "221"
    },
    "wx": "Light Rain",
    "uvi": "1",
    "humidity": "99",
    "windchill": {
      "english": "-9999",
      "metric": "-9999"
    },
    "heatindex": {
      "english": "-9999",
      "metric": "-9999"
    },
    "feelslike": {
      "english": "57",
      "metric": "14"
    },
    "qpf": {
      "english": "0.02",
      "metric": "1"
    },
    "snow": {
      "english": "0.0",
      "metric": "0"
    },
    "pop": "74",
    "mslp": {
      "english": "30.22",
      "metric": "1023"
    }
  },
  {
    "FCTTIME": {
      "hour": "13",
      "hour_padded": "13",
      "min": "00",
      "min_unpadded": "0",
      "sec": "0",
      "year": "2018",
      "mon": "1",
      "mon_padded": "01",
      "mon_abbrev": "Jan",
      "mday": "5",
      "mday_padded": "05",
      "yday": "4",
      "isdst": "0",
      "epoch": "1515186000",
      "pretty": "1:00 PM PST on January 05, 2018",
      "civil": "1:00 PM",
      "month_name": "January",
      "month_name_abbrev": "Jan",
      "weekday_name": "Friday",
      "weekday_name_night": "Friday Night",
      "weekday_name_abbrev": "Fri",
      "weekday_name_unlang": "Friday",
      "weekday_name_night_unlang": "Friday Night",
      "ampm": "PM",
      "tz": "",
      "age": "",
      "UTCDATE": ""
    },
    "temp": {
      "english": "56",
      "metric": "13"
    },
    "dewpoint": {
      "english": "56",
      "metric": "13"
    },
    "condition": "Rain",
    "icon": "rain",
    "icon_url": "http://icons.wxug.com/i/c/k/rain.gif",
    "fctcode": "13",
    "sky": "100",
    "wspd": {
      "english": "7",
      "metric": "11"
    },
    "wdir": {
      "dir": "SW",
      "degrees": "233"
    },
    "wx": "Rain",
    "uvi": "1",
    "humidity": "100",
    "windchill": {
      "english": "-9999",
      "metric": "-9999"
    },
    "heatindex": {
      "english": "-9999",
      "metric": "-9999"
    },
    "feelslike": {
      "english": "56",
      "metric": "13"
    },
    "qpf": {
      "english": "0.03",
      "metric": "1"
    },
    "snow": {
      "english": "0.0",
      "metric": "0"
    },
    "pop": "85",
    "mslp": {
      "english": "30.21",
      "metric": "1023"
    }
  },
  {
    "FCTTIME": {
      "hour": "14",
      "hour_padded": "14",
      "min": "00",
      "min_unpadded": "0",
      "sec": "0",
      "year": "2018",
      "mon": "1",
      "mon_padded": "01",
      "mon_abbrev": "Jan",
      "mday": "5",
      "mday_padded": "05",
      "yday": "4",
      "isdst": "0",
      "epoch": "1515189600",
      "pretty": "2:00 PM PST on January 05, 2018",
      "civil": "2:00 PM",
      "month_name": "January",
      "month_name_abbrev": "Jan",
      "weekday_name": "Friday",
      "weekday_name_night": "Friday Night",
      "weekday_name_abbrev": "Fri",
      "weekday_name_unlang": "Friday",
      "weekday_name_night_unlang": "Friday Night",
      "ampm": "PM",
      "tz": "",
      "age": "",
      "UTCDATE": ""
    },
    "temp": {
      "english": "56",
      "metric": "13"
    },
    "dewpoint": {
      "english": "56",
      "metric": "13"
    },
    "condition": "Chance of Rain",
    "icon": "chancerain",
    "icon_url": "http://icons.wxug.com/i/c/k/chancerain.gif",
    "fctcode": "12",
    "sky": "96",
    "wspd": {
      "english": "7",
      "metric": "11"
    },
    "wdir": {
      "dir": "SW",
      "degrees": "236"
    },
    "wx": "Light Rain",
    "uvi": "1",
    "humidity": "97",
    "windchill": {
      "english": "-9999",
      "metric": "-9999"
    },
    "heatindex": {
      "english": "-9999",
      "metric": "-9999"
    },
    "feelslike": {
      "english": "56",
      "metric": "13"
    },
    "qpf": {
      "english": "0.02",
      "metric": "1"
    },
    "snow": {
      "english": "0.0",
      "metric": "0"
    },
    "pop": "72",
    "mslp": {
      "english": "30.2",
      "metric": "1023"
    }
  },
  {
    "FCTTIME": {
      "hour": "15",
      "hour_padded": "15",
      "min": "00",
      "min_unpadded": "0",
      "sec": "0",
      "year": "2018",
      "mon": "1",
      "mon_padded": "01",
      "mon_abbrev": "Jan",
      "mday": "5",
      "mday_padded": "05",
      "yday": "4",
      "isdst": "0",
      "epoch": "1515193200",
      "pretty": "3:00 PM PST on January 05, 2018",
      "civil": "3:00 PM",
      "month_name": "January",
      "month_name_abbrev": "Jan",
      "weekday_name": "Friday",
      "weekday_name_night": "Friday Night",
      "weekday_name_abbrev": "Fri",
      "weekday_name_unlang": "Friday",
      "weekday_name_night_unlang": "Friday Night",
      "ampm": "PM",
      "tz": "",
      "age": "",
      "UTCDATE": ""
    },
    "temp": {
      "english": "56",
      "metric": "13"
    },
    "dewpoint": {
      "english": "55",
      "metric": "13"
    },
    "condition": "Chance of Rain",
    "icon": "chancerain",
    "icon_url": "http://icons.wxug.com/i/c/k/chancerain.gif",
    "fctcode": "12",
    "sky": "96",
    "wspd": {
      "english": "6",
      "metric": "10"
    },
    "wdir": {
      "dir": "WSW",
      "degrees": "252"
    },
    "wx": "Light Rain",
    "uvi": "0",
    "humidity": "97",
    "windchill": {
      "english": "-9999",
      "metric": "-9999"
    },
    "heatindex": {
      "english": "-9999",
      "metric": "-9999"
    },
    "feelslike": {
      "english": "56",
      "metric": "13"
    },
    "qpf": {
      "english": "0.02",
      "metric": "1"
    },
    "snow": {
      "english": "0.0",
      "metric": "0"
    },
    "pop": "63",
    "mslp": {
      "english": "30.21",
      "metric": "1023"
    }
  },
  {
    "FCTTIME": {
      "hour": "16",
      "hour_padded": "16",
      "min": "00",
      "min_unpadded": "0",
      "sec": "0",
      "year": "2018",
      "mon": "1",
      "mon_padded": "01",
      "mon_abbrev": "Jan",
      "mday": "5",
      "mday_padded": "05",
      "yday": "4",
      "isdst": "0",
      "epoch": "1515196800",
      "pretty": "4:00 PM PST on January 05, 2018",
      "civil": "4:00 PM",
      "month_name": "January",
      "month_name_abbrev": "Jan",
      "weekday_name": "Friday",
      "weekday_name_night": "Friday Night",
      "weekday_name_abbrev": "Fri",
      "weekday_name_unlang": "Friday",
      "weekday_name_night_unlang": "Friday Night",
      "ampm": "PM",
      "tz": "",
      "age": "",
      "UTCDATE": ""
    },
    "temp": {
      "english": "57",
      "metric": "14"
    },
    "dewpoint": {
      "english": "55",
      "metric": "13"
    },
    "condition": "Chance of Rain",
    "icon": "chancerain",
    "icon_url": "http://icons.wxug.com/i/c/k/chancerain.gif",
    "fctcode": "12",
    "sky": "94",
    "wspd": {
      "english": "5",
      "metric": "8"
    },
    "wdir": {
      "dir": "WSW",
      "degrees": "255"
    },
    "wx": "Showers",
    "uvi": "0",
    "humidity": "93",
    "windchill": {
      "english": "-9999",
      "metric": "-9999"
    },
    "heatindex": {
      "english": "-9999",
      "metric": "-9999"
    },
    "feelslike": {
      "english": "57",
      "metric": "14"
    },
    "qpf": {
      "english": "0.01",
      "metric": "0"
    },
    "snow": {
      "english": "0.0",
      "metric": "0"
    },
    "pop": "42",
    "mslp": {
      "english": "30.21",
      "metric": "1023"
    }
  },
  {
    "FCTTIME": {
      "hour": "17",
      "hour_padded": "17",
      "min": "00",
      "min_unpadded": "0",
      "sec": "0",
      "year": "2018",
      "mon": "1",
      "mon_padded": "01",
      "mon_abbrev": "Jan",
      "mday": "5",
      "mday_padded": "05",
      "yday": "4",
      "isdst": "0",
      "epoch": "1515200400",
      "pretty": "5:00 PM PST on January 05, 2018",
      "civil": "5:00 PM",
      "month_name": "January",
      "month_name_abbrev": "Jan",
      "weekday_name": "Friday",
      "weekday_name_night": "Friday Night",
      "weekday_name_abbrev": "Fri",
      "weekday_name_unlang": "Friday",
      "weekday_name_night_unlang": "Friday Night",
      "ampm": "PM",
      "tz": "",
      "age": "",
      "UTCDATE": ""
    },
    "temp": {
      "english": "56",
      "metric": "13"
    },
    "dewpoint": {
      "english": "54",
      "metric": "12"
    },
    "condition": "Overcast",
    "icon": "cloudy",
    "icon_url": "http://icons.wxug.com/i/c/k/cloudy.gif",
    "fctcode": "4",
    "sky": "90",
    "wspd": {
      "english": "4",
      "metric": "6"
    },
    "wdir": {
      "dir": "W",
      "degrees": "266"
    },
    "wx": "Cloudy",
    "uvi": "0",
    "humidity": "95",
    "windchill": {
      "english": "-9999",
      "metric": "-9999"
    },
    "heatindex": {
      "english": "-9999",
      "metric": "-9999"
    },
    "feelslike": {
      "english": "56",
      "metric": "13"
    },
    "qpf": {
      "english": "0.0",
      "metric": "0"
    },
    "snow": {
      "english": "0.0",
      "metric": "0"
    },
    "pop": "24",
    "mslp": {
      "english": "30.22",
      "metric": "1023"
    }
  },
  {
    "FCTTIME": {
      "hour": "18",
      "hour_padded": "18",
      "min": "00",
      "min_unpadded": "0",
      "sec": "0",
      "year": "2018",
      "mon": "1",
      "mon_padded": "01",
      "mon_abbrev": "Jan",
      "mday": "5",
      "mday_padded": "05",
      "yday": "4",
      "isdst": "0",
      "epoch": "1515204000",
      "pretty": "6:00 PM PST on January 05, 2018",
      "civil": "6:00 PM",
      "month_name": "January",
      "month_name_abbrev": "Jan",
      "weekday_name": "Friday",
      "weekday_name_night": "Friday Night",
      "weekday_name_abbrev": "Fri",
      "weekday_name_unlang": "Friday",
      "weekday_name_night_unlang": "Friday Night",
      "ampm": "PM",
      "tz": "",
      "age": "",
      "UTCDATE": ""
    },
    "temp": {
      "english": "55",
      "metric": "13"
    },
    "dewpoint": {
      "english": "54",
      "metric": "12"
    },
    "condition": "Overcast",
    "icon": "cloudy",
    "icon_url": "http://icons.wxug.com/i/c/k/nt_cloudy.gif",
    "fctcode": "4",
    "sky": "86",
    "wspd": {
      "english": "5",
      "metric": "8"
    },
    "wdir": {
      "dir": "WSW",
      "degrees": "253"
    },
    "wx": "Cloudy",
    "uvi": "0",
    "humidity": "95",
    "windchill": {
      "english": "-9999",
      "metric": "-9999"
    },
    "heatindex": {
      "english": "-9999",
      "metric": "-9999"
    },
    "feelslike": {
      "english": "55",
      "metric": "13"
    },
    "qpf": {
      "english": "0.0",
      "metric": "0"
    },
    "snow": {
      "english": "0.0",
      "metric": "0"
    },
    "pop": "23",
    "mslp": {
      "english": "30.23",
      "metric": "1024"
    }
  },
  {
    "FCTTIME": {
      "hour": "19",
      "hour_padded": "19",
      "min": "00",
      "min_unpadded": "0",
      "sec": "0",
      "year": "2018",
      "mon": "1",
      "mon_padded": "01",
      "mon_abbrev": "Jan",
      "mday": "5",
      "mday_padded": "05",
      "yday": "4",
      "isdst": "0",
      "epoch": "1515207600",
      "pretty": "7:00 PM PST on January 05, 2018",
      "civil": "7:00 PM",
      "month_name": "January",
      "month_name_abbrev": "Jan",
      "weekday_name": "Friday",
      "weekday_name_night": "Friday Night",
      "weekday_name_abbrev": "Fri",
      "weekday_name_unlang": "Friday",
      "weekday_name_night_unlang": "Friday Night",
      "ampm": "PM",
      "tz": "",
      "age": "",
      "UTCDATE": ""
    },
    "temp": {
      "english": "55",
      "metric": "13"
    },
    "dewpoint": {
      "english": "53",
      "metric": "12"
    },
    "condition": "Overcast",
    "icon": "cloudy",
    "icon_url": "http://icons.wxug.com/i/c/k/nt_cloudy.gif",
    "fctcode": "4",
    "sky": "82",
    "wspd": {
      "english": "3",
      "metric": "5"
    },
    "wdir": {
      "dir": "WSW",
      "degrees": "250"
    },
    "wx": "Cloudy",
    "uvi": "0",
    "humidity": "94",
    "windchill": {
      "english": "-9999",
      "metric": "-9999"
    },
    "heatindex": {
      "english": "-9999",
      "metric": "-9999"
    },
    "feelslike": {
      "english": "55",
      "metric": "13"
    },
    "qpf": {
      "english": "0.0",
      "metric": "0"
    },
    "snow": {
      "english": "0.0",
      "metric": "0"
    },
    "pop": "16",
    "mslp": {
      "english": "30.23",
      "metric": "1024"
    }
  },
  {
    "FCTTIME": {
      "hour": "20",
      "hour_padded": "20",
      "min": "00",
      "min_unpadded": "0",
      "sec": "0",
      "year": "2018",
      "mon": "1",
      "mon_padded": "01",
      "mon_abbrev": "Jan",
      "mday": "5",
      "mday_padded": "05",
      "yday": "4",
      "isdst": "0",
      "epoch": "1515211200",
      "pretty": "8:00 PM PST on January 05, 2018",
      "civil": "8:00 PM",
      "month_name": "January",
      "month_name_abbrev": "Jan",
      "weekday_name": "Friday",
      "weekday_name_night": "Friday Night",
      "weekday_name_abbrev": "Fri",
      "weekday_name_unlang": "Friday",
      "weekday_name_night_unlang": "Friday Night",
      "ampm": "PM",
      "tz": "",
      "age": "",
      "UTCDATE": ""
    },
    "temp": {
      "english": "55",
      "metric": "13"
    },
    "dewpoint": {
      "english": "52",
      "metric": "11"
    },
    "condition": "Overcast",
    "icon": "cloudy",
    "icon_url": "http://icons.wxug.com/i/c/k/nt_cloudy.gif",
    "fctcode": "4",
    "sky": "85",
    "wspd": {
      "english": "3",
      "metric": "5"
    },
    "wdir": {
      "dir": "WSW",
      "degrees": "249"
    },
    "wx": "Cloudy",
    "uvi": "0",
    "humidity": "92",
    "windchill": {
      "english": "-9999",
      "metric": "-9999"
    },
    "heatindex": {
      "english": "-9999",
      "metric": "-9999"
    },
    "feelslike": {
      "english": "55",
      "metric": "13"
    },
    "qpf": {
      "english": "0.0",
      "metric": "0"
    },
    "snow": {
      "english": "0.0",
      "metric": "0"
    },
    "pop": "12",
    "mslp": {
      "english": "30.24",
      "metric": "1024"
    }
  },
  {
    "FCTTIME": {
      "hour": "21",
      "hour_padded": "21",
      "min": "00",
      "min_unpadded": "0",
      "sec": "0",
      "year": "2018",
      "mon": "1",
      "mon_padded": "01",
      "mon_abbrev": "Jan",
      "mday": "5",
      "mday_padded": "05",
      "yday": "4",
      "isdst": "0",
      "epoch": "1515214800",
      "pretty": "9:00 PM PST on January 05, 2018",
      "civil": "9:00 PM",
      "month_name": "January",
      "month_name_abbrev": "Jan",
      "weekday_name": "Friday",
      "weekday_name_night": "Friday Night",
      "weekday_name_abbrev": "Fri",
      "weekday_name_unlang": "Friday",
      "weekday_name_night_unlang": "Friday Night",
      "ampm": "PM",
      "tz": "",
      "age": "",
      "UTCDATE": ""
    },
    "temp": {
      "english": "54",
      "metric": "12"
    },
    "dewpoint": {
      "english": "52",
      "metric": "11"
    },
    "condition": "Overcast",
    "icon": "cloudy",
    "icon_url": "http://icons.wxug.com/i/c/k/nt_cloudy.gif",
    "fctcode": "4",
    "sky": "96",
    "wspd": {
      "english": "3",
      "metric": "5"
    },
    "wdir": {
      "dir": "WSW",
      "degrees": "256"
    },
    "wx": "Cloudy",
    "uvi": "0",
    "humidity": "93",
    "windchill": {
      "english": "-9999",
      "metric": "-9999"
    },
    "heatindex": {
      "english": "-9999",
      "metric": "-9999"
    },
    "feelslike": {
      "english": "54",
      "metric": "12"
    },
    "qpf": {
      "english": "0.0",
      "metric": "0"
    },
    "snow": {
      "english": "0.0",
      "metric": "0"
    },
    "pop": "8",
    "mslp": {
      "english": "30.26",
      "metric": "1025"
    }
  },
  {
    "FCTTIME": {
      "hour": "22",
      "hour_padded": "22",
      "min": "00",
      "min_unpadded": "0",
      "sec": "0",
      "year": "2018",
      "mon": "1",
      "mon_padded": "01",
      "mon_abbrev": "Jan",
      "mday": "5",
      "mday_padded": "05",
      "yday": "4",
      "isdst": "0",
      "epoch": "1515218400",
      "pretty": "10:00 PM PST on January 05, 2018",
      "civil": "10:00 PM",
      "month_name": "January",
      "month_name_abbrev": "Jan",
      "weekday_name": "Friday",
      "weekday_name_night": "Friday Night",
      "weekday_name_abbrev": "Fri",
      "weekday_name_unlang": "Friday",
      "weekday_name_night_unlang": "Friday Night",
      "ampm": "PM",
      "tz": "",
      "age": "",
      "UTCDATE": ""
    },
    "temp": {
      "english": "53",
      "metric": "12"
    },
    "dewpoint": {
      "english": "52",
      "metric": "11"
    },
    "condition": "Overcast",
    "icon": "cloudy",
    "icon_url": "http://icons.wxug.com/i/c/k/nt_cloudy.gif",
    "fctcode": "4",
    "sky": "95",
    "wspd": {
      "english": "3",
      "metric": "5"
    },
    "wdir": {
      "dir": "W",
      "degrees": "276"
    },
    "wx": "Cloudy",
    "uvi": "0",
    "humidity": "94",
    "windchill": {
      "english": "-9999",
      "metric": "-9999"
    },
    "heatindex": {
      "english": "-9999",
      "metric": "-9999"
    },
    "feelslike": {
      "english": "53",
      "metric": "12"
    },
    "qpf": {
      "english": "0.0",
      "metric": "0"
    },
    "snow": {
      "english": "0.0",
      "metric": "0"
    },
    "pop": "8",
    "mslp": {
      "english": "30.26",
      "metric": "1025"
    }
  },
  {
    "FCTTIME": {
      "hour": "23",
      "hour_padded": "23",
      "min": "00",
      "min_unpadded": "0",
      "sec": "0",
      "year": "2018",
      "mon": "1",
      "mon_padded": "01",
      "mon_abbrev": "Jan",
      "mday": "5",
      "mday_padded": "05",
      "yday": "4",
      "isdst": "0",
      "epoch": "1515222000",
      "pretty": "11:00 PM PST on January 05, 2018",
      "civil": "11:00 PM",
      "month_name": "January",
      "month_name_abbrev": "Jan",
      "weekday_name": "Friday",
      "weekday_name_night": "Friday Night",
      "weekday_name_abbrev": "Fri",
      "weekday_name_unlang": "Friday",
      "weekday_name_night_unlang": "Friday Night",
      "ampm": "PM",
      "tz": "",
      "age": "",
      "UTCDATE": ""
    },
    "temp": {
      "english": "53",
      "metric": "12"
    },
    "dewpoint": {
      "english": "51",
      "metric": "11"
    },
    "condition": "Overcast",
    "icon": "cloudy",
    "icon_url": "http://icons.wxug.com/i/c/k/nt_cloudy.gif",
    "fctcode": "4",
    "sky": "88",
    "wspd": {
      "english": "3",
      "metric": "5"
    },
    "wdir": {
      "dir": "W",
      "degrees": "269"
    },
    "wx": "Cloudy",
    "uvi": "0",
    "humidity": "93",
    "windchill": {
      "english": "-9999",
      "metric": "-9999"
    },
    "heatindex": {
      "english": "-9999",
      "metric": "-9999"
    },
    "feelslike": {
      "english": "53",
      "metric": "12"
    },
    "qpf": {
      "english": "0.0",
      "metric": "0"
    },
    "snow": {
      "english": "0.0",
      "metric": "0"
    },
    "pop": "8",
    "mslp": {
      "english": "30.26",
      "metric": "1025"
    }
  },
  {
    "FCTTIME": {
      "hour": "0",
      "hour_padded": "00",
      "min": "00",
      "min_unpadded": "0",
      "sec": "0",
      "year": "2018",
      "mon": "1",
      "mon_padded": "01",
      "mon_abbrev": "Jan",
      "mday": "6",
      "mday_padded": "06",
      "yday": "5",
      "isdst": "0",
      "epoch": "1515225600",
      "pretty": "12:00 AM PST on January 06, 2018",
      "civil": "12:00 AM",
      "month_name": "January",
      "month_name_abbrev": "Jan",
      "weekday_name": "Saturday",
      "weekday_name_night": "Saturday Night",
      "weekday_name_abbrev": "Sat",
      "weekday_name_unlang": "Saturday",
      "weekday_name_night_unlang": "Saturday Night",
      "ampm": "AM",
      "tz": "",
      "age": "",
      "UTCDATE": ""
    },
    "temp": {
      "english": "53",
      "metric": "12"
    },
    "dewpoint": {
      "english": "51",
      "metric": "11"
    },
    "condition": "Mostly Cloudy",
    "icon": "mostlycloudy",
    "icon_url": "http://icons.wxug.com/i/c/k/nt_mostlycloudy.gif",
    "fctcode": "3",
    "sky": "78",
    "wspd": {
      "english": "3",
      "metric": "5"
    },
    "wdir": {
      "dir": "WNW",
      "degrees": "286"
    },
    "wx": "Mostly Cloudy",
    "uvi": "0",
    "humidity": "94",
    "windchill": {
      "english": "-9999",
      "metric": "-9999"
    },
    "heatindex": {
      "english": "-9999",
      "metric": "-9999"
    },
    "feelslike": {
      "english": "53",
      "metric": "12"
    },
    "qpf": {
      "english": "0.0",
      "metric": "0"
    },
    "snow": {
      "english": "0.0",
      "metric": "0"
    },
    "pop": "8",
    "mslp": {
      "english": "30.26",
      "metric": "1025"
    }
  }
  ]
}

export default data