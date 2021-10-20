{
  "meta": {
      "count": 24,
      "links": {
          "self": "https://test.api.amadeus.com/v2/shopping/flight-offers?originLocationCode=ORD&destinationLocationCode=JFK&departureDate=2021-11-01&adults=1"
      }
  },
  "data": [
      {
          "type": "flight-offer",
          "id": "1",
          "source": "GDS",
          "instantTicketingRequired": false,
          "nonHomogeneous": false,
          "oneWay": false,
          "lastTicketingDate": "2021-10-18",
          "numberOfBookableSeats": 7,
          "itineraries": [
              {
                  "duration": "PT2H15M",
                  "segments": [
                      {
                          "departure": {
                              "iataCode": "ORD",
                              "terminal": "2",
                              "at": "2021-11-01T10:30:00"
                          },
                          "arrival": {
                              "iataCode": "JFK",
                              "terminal": "5",
                              "at": "2021-11-01T13:45:00"
                          },
                          "carrierCode": "B6",
                          "number": "906",
                          "aircraft": {
                              "code": "E90"
                          },
                          "operating": {
                              "carrierCode": "B6"
                          },
                          "duration": "PT2H15M",
                          "id": "11",
                          "numberOfStops": 0,
                          "blacklistedInEU": false
                      }
                  ]
              }
          ],
          "price": {
              "currency": "EUR",
              "total": "79.12",
              "base": "62.00",
              "fees": [
                  {
                      "amount": "0.00",
                      "type": "SUPPLIER"
                  },
                  {
                      "amount": "0.00",
                      "type": "TICKETING"
                  }
              ],
              "grandTotal": "79.12"
          },
          "pricingOptions": {
              "fareType": [
                  "PUBLISHED"
              ],
              "includedCheckedBagsOnly": false
          },
          "validatingAirlineCodes": [
              "B6"
          ],
          "travelerPricings": [
              {
                  "travelerId": "1",
                  "fareOption": "STANDARD",
                  "travelerType": "ADULT",
                  "price": {
                      "currency": "EUR",
                      "total": "79.12",
                      "base": "62.00"
                  },
                  "fareDetailsBySegment": [
                      {
                          "segmentId": "11",
                          "cabin": "ECONOMY",
                          "fareBasis": "PL4ABEL1",
                          "brandedFare": "DN",
                          "class": "L",
                          "includedCheckedBags": {
                              "quantity": 0
                          }
                      }
                  ]
              }
          ]
      },
      {
          "type": "flight-offer",
          "id": "2",
          "source": "GDS",
          "instantTicketingRequired": false,
          "nonHomogeneous": false,
          "oneWay": false,
          "lastTicketingDate": "2021-10-18",
          "numberOfBookableSeats": 3,
          "itineraries": [
              {
                  "duration": "PT2H16M",
                  "segments": [
                      {
                          "departure": {
                              "iataCode": "ORD",
                              "terminal": "2",
                              "at": "2021-11-01T07:00:00"
                          },
                          "arrival": {
                              "iataCode": "JFK",
                              "terminal": "4",
                              "at": "2021-11-01T10:16:00"
                          },
                          "carrierCode": "DL",
                          "number": "5678",
                          "aircraft": {
                              "code": "E75"
                          },
                          "duration": "PT2H16M",
                          "id": "14",
                          "numberOfStops": 0,
                          "blacklistedInEU": false
                      }
                  ]
              }
          ],
          "price": {
              "currency": "EUR",
              "total": "79.12",
              "base": "62.00",
              "fees": [
                  {
                      "amount": "0.00",
                      "type": "SUPPLIER"
                  },
                  {
                      "amount": "0.00",
                      "type": "TICKETING"
                  }
              ],
              "grandTotal": "79.12"
          },
          "pricingOptions": {
              "fareType": [
                  "PUBLISHED"
              ],
              "includedCheckedBagsOnly": false
          },
          "validatingAirlineCodes": [
              "DL"
          ],
          "travelerPricings": [
              {
                  "travelerId": "1",
                  "fareOption": "STANDARD",
                  "travelerType": "ADULT",
                  "price": {
                      "currency": "EUR",
                      "total": "79.12",
                      "base": "62.00"
                  },
                  "fareDetailsBySegment": [
                      {
                          "segmentId": "14",
                          "cabin": "ECONOMY",
                          "fareBasis": "XAUNA0BQ",
                          "brandedFare": "BASICECON",
                          "class": "E",
                          "includedCheckedBags": {
                              "quantity": 0
                          }
                      }
                  ]
              }
          ]
      },
      {
          "type": "flight-offer",
          "id": "3",
          "source": "GDS",
          "instantTicketingRequired": false,
          "nonHomogeneous": false,
          "oneWay": false,
          "lastTicketingDate": "2021-10-18",
          "numberOfBookableSeats": 7,
          "itineraries": [
              {
                  "duration": "PT2H9M",
                  "segments": [
                      {
                          "departure": {
                              "iataCode": "ORD",
                              "terminal": "3",
                              "at": "2021-11-01T20:40:00"
                          },
                          "arrival": {
                              "iataCode": "JFK",
                              "terminal": "8",
                              "at": "2021-11-01T23:49:00"
                          },
                          "carrierCode": "B6",
                          "number": "4375",
                          "aircraft": {
                              "code": "738"
                          },
                          "operating": {
                              "carrierCode": "AA"
                          },
                          "duration": "PT2H9M",
                          "id": "9",
                          "numberOfStops": 0,
                          "blacklistedInEU": false
                      }
                  ]
              }
          ],
          "price": {
              "currency": "EUR",
              "total": "87.72",
              "base": "70.00",
              "fees": [
                  {
                      "amount": "0.00",
                      "type": "SUPPLIER"
                  },
                  {
                      "amount": "0.00",
                      "type": "TICKETING"
                  }
              ],
              "grandTotal": "87.72"
          },
          "pricingOptions": {
              "fareType": [
                  "PUBLISHED"
              ],
              "includedCheckedBagsOnly": false
          },
          "validatingAirlineCodes": [
              "B6"
          ],
          "travelerPricings": [
              {
                  "travelerId": "1",
                  "fareOption": "STANDARD",
                  "travelerType": "ADULT",
                  "price": {
                      "currency": "EUR",
                      "total": "87.72",
                      "base": "70.00"
                  },
                  "fareDetailsBySegment": [
                      {
                          "segmentId": "9",
                          "cabin": "ECONOMY",
                          "fareBasis": "MUAZZNN3",
                          "class": "M",
                          "includedCheckedBags": {
                              "quantity": 0
                          }
                      }
                  ]
              }
          ]
      },
      {
          "type": "flight-offer",
          "id": "4",
          "source": "GDS",
          "instantTicketingRequired": false,
          "nonHomogeneous": false,
          "oneWay": false,
          "lastTicketingDate": "2021-10-18",
          "numberOfBookableSeats": 7,
          "itineraries": [
              {
                  "duration": "PT2H11M",
                  "segments": [
                      {
                          "departure": {
                              "iataCode": "ORD",
                              "terminal": "3",
                              "at": "2021-11-01T14:28:00"
                          },
                          "arrival": {
                              "iataCode": "JFK",
                              "terminal": "8",
                              "at": "2021-11-01T17:39:00"
                          },
                          "carrierCode": "B6",
                          "number": "4402",
                          "aircraft": {
                              "code": "738"
                          },
                          "operating": {
                              "carrierCode": "AA"
                          },
                          "duration": "PT2H11M",
                          "id": "10",
                          "numberOfStops": 0,
                          "blacklistedInEU": false
                      }
                  ]
              }
          ],
          "price": {
              "currency": "EUR",
              "total": "87.72",
              "base": "70.00",
              "fees": [
                  {
                      "amount": "0.00",
                      "type": "SUPPLIER"
                  },
                  {
                      "amount": "0.00",
                      "type": "TICKETING"
                  }
              ],
              "grandTotal": "87.72"
          },
          "pricingOptions": {
              "fareType": [
                  "PUBLISHED"
              ],
              "includedCheckedBagsOnly": false
          },
          "validatingAirlineCodes": [
              "B6"
          ],
          "travelerPricings": [
              {
                  "travelerId": "1",
                  "fareOption": "STANDARD",
                  "travelerType": "ADULT",
                  "price": {
                      "currency": "EUR",
                      "total": "87.72",
                      "base": "70.00"
                  },
                  "fareDetailsBySegment": [
                      {
                          "segmentId": "10",
                          "cabin": "ECONOMY",
                          "fareBasis": "MUAZZNN3",
                          "class": "M",
                          "includedCheckedBags": {
                              "quantity": 0
                          }
                      }
                  ]
              }
          ]
      },
      {
          "type": "flight-offer",
          "id": "5",
          "source": "GDS",
          "instantTicketingRequired": false,
          "nonHomogeneous": false,
          "oneWay": false,
          "lastTicketingDate": "2021-10-19",
          "numberOfBookableSeats": 7,
          "itineraries": [
              {
                  "duration": "PT2H40M",
                  "segments": [
                      {
                          "departure": {
                              "iataCode": "ORD",
                              "terminal": "2",
                              "at": "2021-11-01T18:05:00"
                          },
                          "arrival": {
                              "iataCode": "JFK",
                              "terminal": "4",
                              "at": "2021-11-01T21:45:00"
                          },
                          "carrierCode": "DL",
                          "number": "5323",
                          "aircraft": {
                              "code": "CR9"
                          },
                          "duration": "PT2H40M",
                          "id": "27",
                          "numberOfStops": 0,
                          "blacklistedInEU": false
                      }
                  ]
              }
          ],
          "price": {
              "currency": "EUR",
              "total": "116.75",
              "base": "97.00",
              "fees": [
                  {
                      "amount": "0.00",
                      "type": "SUPPLIER"
                  },
                  {
                      "amount": "0.00",
                      "type": "TICKETING"
                  }
              ],
              "grandTotal": "116.75"
          },
          "pricingOptions": {
              "fareType": [
                  "PUBLISHED"
              ],
              "includedCheckedBagsOnly": false
          },
          "validatingAirlineCodes": [
              "DL"
          ],
          "travelerPricings": [
              {
                  "travelerId": "1",
                  "fareOption": "STANDARD",
                  "travelerType": "ADULT",
                  "price": {
                      "currency": "EUR",
                      "total": "116.75",
                      "base": "97.00"
                  },
                  "fareDetailsBySegment": [
                      {
                          "segmentId": "27",
                          "cabin": "ECONOMY",
                          "fareBasis": "UA3NA0MQ",
                          "brandedFare": "MAINCABIN",
                          "class": "U",
                          "includedCheckedBags": {
                              "quantity": 0
                          }
                      }
                  ]
              }
          ]
      },
      {
          "type": "flight-offer",
          "id": "6",
          "source": "GDS",
          "instantTicketingRequired": false,
          "nonHomogeneous": false,
          "oneWay": false,
          "lastTicketingDate": "2021-10-18",
          "numberOfBookableSeats": 7,
          "itineraries": [
              {
                  "duration": "PT4H49M",
                  "segments": [
                      {
                          "departure": {
                              "iataCode": "ORD",
                              "terminal": "2",
                              "at": "2021-11-01T14:10:00"
                          },
                          "arrival": {
                              "iataCode": "BOS",
                              "terminal": "C",
                              "at": "2021-11-01T17:35:00"
                          },
                          "carrierCode": "B6",
                          "number": "312",
                          "aircraft": {
                              "code": "E90"
                          },
                          "operating": {
                              "carrierCode": "B6"
                          },
                          "duration": "PT2H25M",
                          "id": "36",
                          "numberOfStops": 0,
                          "blacklistedInEU": false
                      },
                      {
                          "departure": {
                              "iataCode": "BOS",
                              "terminal": "C",
                              "at": "2021-11-01T18:40:00"
                          },
                          "arrival": {
                              "iataCode": "JFK",
                              "terminal": "5",
                              "at": "2021-11-01T19:59:00"
                          },
                          "carrierCode": "B6",
                          "number": "2017",
                          "aircraft": {
                              "code": "E90"
                          },
                          "operating": {
                              "carrierCode": "B6"
                          },
                          "duration": "PT1H19M",
                          "id": "37",
                          "numberOfStops": 0,
                          "blacklistedInEU": false
                      }
                  ]
              }
          ],
          "price": {
              "currency": "EUR",
              "total": "140.49",
              "base": "112.00",
              "fees": [
                  {
                      "amount": "0.00",
                      "type": "SUPPLIER"
                  },
                  {
                      "amount": "0.00",
                      "type": "TICKETING"
                  }
              ],
              "grandTotal": "140.49"
          },
          "pricingOptions": {
              "fareType": [
                  "PUBLISHED"
              ],
              "includedCheckedBagsOnly": false
          },
          "validatingAirlineCodes": [
              "B6"
          ],
          "travelerPricings": [
              {
                  "travelerId": "1",
                  "fareOption": "STANDARD",
                  "travelerType": "ADULT",
                  "price": {
                      "currency": "EUR",
                      "total": "140.49",
                      "base": "112.00"
                  },
                  "fareDetailsBySegment": [
                      {
                          "segmentId": "36",
                          "cabin": "ECONOMY",
                          "fareBasis": "MI4AUEL1",
                          "brandedFare": "DN",
                          "class": "L",
                          "includedCheckedBags": {
                              "quantity": 0
                          }
                      },
                      {
                          "segmentId": "37",
                          "cabin": "ECONOMY",
                          "fareBasis": "UL4AUEL1",
                          "brandedFare": "DN",
                          "class": "L",
                          "includedCheckedBags": {
                              "quantity": 0
                          }
                      }
                  ]
              }
          ]
      },
      {
          "type": "flight-offer",
          "id": "7",
          "source": "GDS",
          "instantTicketingRequired": false,
          "nonHomogeneous": false,
          "oneWay": false,
          "lastTicketingDate": "2021-10-18",
          "numberOfBookableSeats": 7,
          "itineraries": [
              {
                  "duration": "PT8H16M",
                  "segments": [
                      {
                          "departure": {
                              "iataCode": "ORD",
                              "terminal": "2",
                              "at": "2021-11-01T14:10:00"
                          },
                          "arrival": {
                              "iataCode": "BOS",
                              "terminal": "C",
                              "at": "2021-11-01T17:35:00"
                          },
                          "carrierCode": "B6",
                          "number": "312",
                          "aircraft": {
                              "code": "E90"
                          },
                          "operating": {
                              "carrierCode": "B6"
                          },
                          "duration": "PT2H25M",
                          "id": "15",
                          "numberOfStops": 0,
                          "blacklistedInEU": false
                      },
                      {
                          "departure": {
                              "iataCode": "BOS",
                              "terminal": "C",
                              "at": "2021-11-01T22:15:00"
                          },
                          "arrival": {
                              "iataCode": "JFK",
                              "terminal": "5",
                              "at": "2021-11-01T23:26:00"
                          },
                          "carrierCode": "B6",
                          "number": "1117",
                          "aircraft": {
                              "code": "E90"
                          },
                          "operating": {
                              "carrierCode": "B6"
                          },
                          "duration": "PT1H11M",
                          "id": "16",
                          "numberOfStops": 0,
                          "blacklistedInEU": false
                      }
                  ]
              }
          ],
          "price": {
              "currency": "EUR",
              "total": "145.34",
              "base": "112.00",
              "fees": [
                  {
                      "amount": "0.00",
                      "type": "SUPPLIER"
                  },
                  {
                      "amount": "0.00",
                      "type": "TICKETING"
                  }
              ],
              "grandTotal": "145.34"
          },
          "pricingOptions": {
              "fareType": [
                  "PUBLISHED"
              ],
              "includedCheckedBagsOnly": false
          },
          "validatingAirlineCodes": [
              "B6"
          ],
          "travelerPricings": [
              {
                  "travelerId": "1",
                  "fareOption": "STANDARD",
                  "travelerType": "ADULT",
                  "price": {
                      "currency": "EUR",
                      "total": "145.34",
                      "base": "112.00"
                  },
                  "fareDetailsBySegment": [
                      {
                          "segmentId": "15",
                          "cabin": "ECONOMY",
                          "fareBasis": "MI4AUEL1",
                          "brandedFare": "DN",
                          "class": "L",
                          "includedCheckedBags": {
                              "quantity": 0
                          }
                      },
                      {
                          "segmentId": "16",
                          "cabin": "ECONOMY",
                          "fareBasis": "UL4AUEL1",
                          "brandedFare": "DN",
                          "class": "L",
                          "includedCheckedBags": {
                              "quantity": 0
                          }
                      }
                  ]
              }
          ]
      },
      {
          "type": "flight-offer",
          "id": "8",
          "source": "GDS",
          "instantTicketingRequired": false,
          "nonHomogeneous": false,
          "oneWay": false,
          "lastTicketingDate": "2021-10-18",
          "numberOfBookableSeats": 7,
          "itineraries": [
              {
                  "duration": "PT23H8M",
                  "segments": [
                      {
                          "departure": {
                              "iataCode": "ORD",
                              "terminal": "2",
                              "at": "2021-11-01T14:10:00"
                          },
                          "arrival": {
                              "iataCode": "BOS",
                              "terminal": "C",
                              "at": "2021-11-01T17:35:00"
                          },
                          "carrierCode": "B6",
                          "number": "312",
                          "aircraft": {
                              "code": "E90"
                          },
                          "operating": {
                              "carrierCode": "B6"
                          },
                          "duration": "PT2H25M",
                          "id": "7",
                          "numberOfStops": 0,
                          "blacklistedInEU": false
                      },
                      {
                          "departure": {
                              "iataCode": "BOS",
                              "terminal": "C",
                              "at": "2021-11-02T13:05:00"
                          },
                          "arrival": {
                              "iataCode": "JFK",
                              "terminal": "5",
                              "at": "2021-11-02T14:18:00"
                          },
                          "carrierCode": "B6",
                          "number": "2317",
                          "aircraft": {
                              "code": "E90"
                          },
                          "operating": {
                              "carrierCode": "B6"
                          },
                          "duration": "PT1H13M",
                          "id": "8",
                          "numberOfStops": 0,
                          "blacklistedInEU": false
                      }
                  ]
              }
          ],
          "price": {
              "currency": "EUR",
              "total": "145.34",
              "base": "112.00",
              "fees": [
                  {
                      "amount": "0.00",
                      "type": "SUPPLIER"
                  },
                  {
                      "amount": "0.00",
                      "type": "TICKETING"
                  }
              ],
              "grandTotal": "145.34"
          },
          "pricingOptions": {
              "fareType": [
                  "PUBLISHED"
              ],
              "includedCheckedBagsOnly": false
          },
          "validatingAirlineCodes": [
              "B6"
          ],
          "travelerPricings": [
              {
                  "travelerId": "1",
                  "fareOption": "STANDARD",
                  "travelerType": "ADULT",
                  "price": {
                      "currency": "EUR",
                      "total": "145.34",
                      "base": "112.00"
                  },
                  "fareDetailsBySegment": [
                      {
                          "segmentId": "7",
                          "cabin": "ECONOMY",
                          "fareBasis": "MI4AUEL1",
                          "brandedFare": "DN",
                          "class": "L",
                          "includedCheckedBags": {
                              "quantity": 0
                          }
                      },
                      {
                          "segmentId": "8",
                          "cabin": "ECONOMY",
                          "fareBasis": "UL4AUEL1",
                          "brandedFare": "DN",
                          "class": "L",
                          "includedCheckedBags": {
                              "quantity": 0
                          }
                      }
                  ]
              }
          ]
      },
      {
          "type": "flight-offer",
          "id": "9",
          "source": "GDS",
          "instantTicketingRequired": false,
          "nonHomogeneous": false,
          "oneWay": false,
          "lastTicketingDate": "2021-10-18",
          "numberOfBookableSeats": 9,
          "itineraries": [
              {
                  "duration": "PT8H37M",
                  "segments": [
                      {
                          "departure": {
                              "iataCode": "ORD",
                              "terminal": "2",
                              "at": "2021-11-01T12:44:00"
                          },
                          "arrival": {
                              "iataCode": "DTW",
                              "terminal": "EM",
                              "at": "2021-11-01T15:10:00"
                          },
                          "carrierCode": "DL",
                          "number": "2712",
                          "aircraft": {
                              "code": "717"
                          },
                          "operating": {
                              "carrierCode": "DL"
                          },
                          "duration": "PT1H26M",
                          "id": "25",
                          "numberOfStops": 0,
                          "blacklistedInEU": false
                      },
                      {
                          "departure": {
                              "iataCode": "DTW",
                              "terminal": "EM",
                              "at": "2021-11-01T20:23:00"
                          },
                          "arrival": {
                              "iataCode": "JFK",
                              "terminal": "4",
                              "at": "2021-11-01T22:21:00"
                          },
                          "carrierCode": "DL",
                          "number": "4899",
                          "aircraft": {
                              "code": "CR9"
                          },
                          "duration": "PT1H58M",
                          "id": "26",
                          "numberOfStops": 0,
                          "blacklistedInEU": false
                      }
                  ]
              }
          ],
          "price": {
              "currency": "EUR",
              "total": "157.17",
              "base": "123.00",
              "fees": [
                  {
                      "amount": "0.00",
                      "type": "SUPPLIER"
                  },
                  {
                      "amount": "0.00",
                      "type": "TICKETING"
                  }
              ],
              "grandTotal": "157.17"
          },
          "pricingOptions": {
              "fareType": [
                  "PUBLISHED"
              ],
              "includedCheckedBagsOnly": false
          },
          "validatingAirlineCodes": [
              "DL"
          ],
          "travelerPricings": [
              {
                  "travelerId": "1",
                  "fareOption": "STANDARD",
                  "travelerType": "ADULT",
                  "price": {
                      "currency": "EUR",
                      "total": "157.17",
                      "base": "123.00"
                  },
                  "fareDetailsBySegment": [
                      {
                          "segmentId": "25",
                          "cabin": "ECONOMY",
                          "fareBasis": "VAUSA0BC",
                          "brandedFare": "BASICECON",
                          "class": "E",
                          "sliceDiceIndicator": "LOCAL_AVAILABILITY",
                          "includedCheckedBags": {
                              "quantity": 0
                          }
                      },
                      {
                          "segmentId": "26",
                          "cabin": "ECONOMY",
                          "fareBasis": "XAUNA0BC",
                          "brandedFare": "BASICECON",
                          "class": "E",
                          "sliceDiceIndicator": "LOCAL_AVAILABILITY",
                          "includedCheckedBags": {
                              "quantity": 0
                          }
                      }
                  ]
              }
          ]
      },
      {
          "type": "flight-offer",
          "id": "10",
          "source": "GDS",
          "instantTicketingRequired": false,
          "nonHomogeneous": false,
          "oneWay": false,
          "lastTicketingDate": "2021-10-18",
          "numberOfBookableSeats": 9,
          "itineraries": [
              {
                  "duration": "PT10H31M",
                  "segments": [
                      {
                          "departure": {
                              "iataCode": "ORD",
                              "terminal": "2",
                              "at": "2021-11-01T10:50:00"
                          },
                          "arrival": {
                              "iataCode": "DTW",
                              "terminal": "EM",
                              "at": "2021-11-01T13:11:00"
                          },
                          "carrierCode": "DL",
                          "number": "2595",
                          "aircraft": {
                              "code": "717"
                          },
                          "operating": {
                              "carrierCode": "DL"
                          },
                          "duration": "PT1H21M",
                          "id": "21",
                          "numberOfStops": 0,
                          "blacklistedInEU": false
                      },
                      {
                          "departure": {
                              "iataCode": "DTW",
                              "terminal": "EM",
                              "at": "2021-11-01T20:23:00"
                          },
                          "arrival": {
                              "iataCode": "JFK",
                              "terminal": "4",
                              "at": "2021-11-01T22:21:00"
                          },
                          "carrierCode": "DL",
                          "number": "4899",
                          "aircraft": {
                              "code": "CR9"
                          },
                          "duration": "PT1H58M",
                          "id": "22",
                          "numberOfStops": 0,
                          "blacklistedInEU": false
                      }
                  ]
              }
          ],
          "price": {
              "currency": "EUR",
              "total": "157.17",
              "base": "123.00",
              "fees": [
                  {
                      "amount": "0.00",
                      "type": "SUPPLIER"
                  },
                  {
                      "amount": "0.00",
                      "type": "TICKETING"
                  }
              ],
              "grandTotal": "157.17"
          },
          "pricingOptions": {
              "fareType": [
                  "PUBLISHED"
              ],
              "includedCheckedBagsOnly": false
          },
          "validatingAirlineCodes": [
              "DL"
          ],
          "travelerPricings": [
              {
                  "travelerId": "1",
                  "fareOption": "STANDARD",
                  "travelerType": "ADULT",
                  "price": {
                      "currency": "EUR",
                      "total": "157.17",
                      "base": "123.00"
                  },
                  "fareDetailsBySegment": [
                      {
                          "segmentId": "21",
                          "cabin": "ECONOMY",
                          "fareBasis": "VAUSA0BC",
                          "brandedFare": "BASICECON",
                          "class": "E",
                          "sliceDiceIndicator": "LOCAL_AVAILABILITY",
                          "includedCheckedBags": {
                              "quantity": 0
                          }
                      },
                      {
                          "segmentId": "22",
                          "cabin": "ECONOMY",
                          "fareBasis": "XAUNA0BC",
                          "brandedFare": "BASICECON",
                          "class": "E",
                          "sliceDiceIndicator": "LOCAL_AVAILABILITY",
                          "includedCheckedBags": {
                              "quantity": 0
                          }
                      }
                  ]
              }
          ]
      },
      {
          "type": "flight-offer",
          "id": "11",
          "source": "GDS",
          "instantTicketingRequired": false,
          "nonHomogeneous": false,
          "oneWay": false,
          "lastTicketingDate": "2021-10-18",
          "numberOfBookableSeats": 9,
          "itineraries": [
              {
                  "duration": "PT10H41M",
                  "segments": [
                      {
                          "departure": {
                              "iataCode": "ORD",
                              "terminal": "2",
                              "at": "2021-11-01T08:39:00"
                          },
                          "arrival": {
                              "iataCode": "RDU",
                              "terminal": "2",
                              "at": "2021-11-01T11:47:00"
                          },
                          "carrierCode": "DL",
                          "number": "5013",
                          "aircraft": {
                              "code": "CR7"
                          },
                          "duration": "PT2H8M",
                          "id": "28",
                          "numberOfStops": 0,
                          "blacklistedInEU": false
                      },
                      {
                          "departure": {
                              "iataCode": "RDU",
                              "terminal": "2",
                              "at": "2021-11-01T18:30:00"
                          },
                          "arrival": {
                              "iataCode": "JFK",
                              "terminal": "4",
                              "at": "2021-11-01T20:20:00"
                          },
                          "carrierCode": "DL",
                          "number": "2205",
                          "aircraft": {
                              "code": "319"
                          },
                          "operating": {
                              "carrierCode": "DL"
                          },
                          "duration": "PT1H50M",
                          "id": "29",
                          "numberOfStops": 0,
                          "blacklistedInEU": false
                      }
                  ]
              }
          ],
          "price": {
              "currency": "EUR",
              "total": "188.34",
              "base": "152.00",
              "fees": [
                  {
                      "amount": "0.00",
                      "type": "SUPPLIER"
                  },
                  {
                      "amount": "0.00",
                      "type": "TICKETING"
                  }
              ],
              "grandTotal": "188.34"
          },
          "pricingOptions": {
              "fareType": [
                  "PUBLISHED"
              ],
              "includedCheckedBagsOnly": false
          },
          "validatingAirlineCodes": [
              "DL"
          ],
          "travelerPricings": [
              {
                  "travelerId": "1",
                  "fareOption": "STANDARD",
                  "travelerType": "ADULT",
                  "price": {
                      "currency": "EUR",
                      "total": "188.34",
                      "base": "152.00"
                  },
                  "fareDetailsBySegment": [
                      {
                          "segmentId": "28",
                          "cabin": "ECONOMY",
                          "fareBasis": "XAUSA0BC",
                          "brandedFare": "BASICECON",
                          "class": "E",
                          "sliceDiceIndicator": "LOCAL_AVAILABILITY",
                          "includedCheckedBags": {
                              "quantity": 0
                          }
                      },
                      {
                          "segmentId": "29",
                          "cabin": "ECONOMY",
                          "fareBasis": "TAUSA0BC",
                          "brandedFare": "BASICECON",
                          "class": "E",
                          "sliceDiceIndicator": "LOCAL_AVAILABILITY",
                          "includedCheckedBags": {
                              "quantity": 0
                          }
                      }
                  ]
              }
          ]
      },
      {
          "type": "flight-offer",
          "id": "12",
          "source": "GDS",
          "instantTicketingRequired": false,
          "nonHomogeneous": false,
          "oneWay": false,
          "lastTicketingDate": "2021-10-18",
          "numberOfBookableSeats": 9,
          "itineraries": [
              {
                  "duration": "PT10H56M",
                  "segments": [
                      {
                          "departure": {
                              "iataCode": "ORD",
                              "terminal": "2",
                              "at": "2021-11-01T19:49:00"
                          },
                          "arrival": {
                              "iataCode": "RDU",
                              "terminal": "2",
                              "at": "2021-11-01T22:57:00"
                          },
                          "carrierCode": "DL",
                          "number": "5099",
                          "aircraft": {
                              "code": "CR7"
                          },
                          "duration": "PT2H8M",
                          "id": "42",
                          "numberOfStops": 0,
                          "blacklistedInEU": false
                      },
                      {
                          "departure": {
                              "iataCode": "RDU",
                              "terminal": "2",
                              "at": "2021-11-02T06:00:00"
                          },
                          "arrival": {
                              "iataCode": "JFK",
                              "terminal": "4",
                              "at": "2021-11-02T07:45:00"
                          },
                          "carrierCode": "DL",
                          "number": "2343",
                          "aircraft": {
                              "code": "319"
                          },
                          "operating": {
                              "carrierCode": "DL"
                          },
                          "duration": "PT1H45M",
                          "id": "43",
                          "numberOfStops": 0,
                          "blacklistedInEU": false
                      }
                  ]
              }
          ],
          "price": {
              "currency": "EUR",
              "total": "188.34",
              "base": "152.00",
              "fees": [
                  {
                      "amount": "0.00",
                      "type": "SUPPLIER"
                  },
                  {
                      "amount": "0.00",
                      "type": "TICKETING"
                  }
              ],
              "grandTotal": "188.34"
          },
          "pricingOptions": {
              "fareType": [
                  "PUBLISHED"
              ],
              "includedCheckedBagsOnly": false
          },
          "validatingAirlineCodes": [
              "DL"
          ],
          "travelerPricings": [
              {
                  "travelerId": "1",
                  "fareOption": "STANDARD",
                  "travelerType": "ADULT",
                  "price": {
                      "currency": "EUR",
                      "total": "188.34",
                      "base": "152.00"
                  },
                  "fareDetailsBySegment": [
                      {
                          "segmentId": "42",
                          "cabin": "ECONOMY",
                          "fareBasis": "XAUSA0BC",
                          "brandedFare": "BASICECON",
                          "class": "E",
                          "sliceDiceIndicator": "LOCAL_AVAILABILITY",
                          "includedCheckedBags": {
                              "quantity": 0
                          }
                      },
                      {
                          "segmentId": "43",
                          "cabin": "ECONOMY",
                          "fareBasis": "TAUSA0BC",
                          "brandedFare": "BASICECON",
                          "class": "E",
                          "sliceDiceIndicator": "LOCAL_AVAILABILITY",
                          "includedCheckedBags": {
                              "quantity": 0
                          }
                      }
                  ]
              }
          ]
      },
      {
          "type": "flight-offer",
          "id": "13",
          "source": "GDS",
          "instantTicketingRequired": false,
          "nonHomogeneous": false,
          "oneWay": false,
          "lastTicketingDate": "2021-10-18",
          "numberOfBookableSeats": 9,
          "itineraries": [
              {
                  "duration": "PT15H8M",
                  "segments": [
                      {
                          "departure": {
                              "iataCode": "ORD",
                              "terminal": "2",
                              "at": "2021-11-01T19:49:00"
                          },
                          "arrival": {
                              "iataCode": "RDU",
                              "terminal": "2",
                              "at": "2021-11-01T22:57:00"
                          },
                          "carrierCode": "DL",
                          "number": "5099",
                          "aircraft": {
                              "code": "CR7"
                          },
                          "duration": "PT2H8M",
                          "id": "5",
                          "numberOfStops": 0,
                          "blacklistedInEU": false
                      },
                      {
                          "departure": {
                              "iataCode": "RDU",
                              "terminal": "2",
                              "at": "2021-11-02T10:15:00"
                          },
                          "arrival": {
                              "iataCode": "JFK",
                              "terminal": "4",
                              "at": "2021-11-02T11:57:00"
                          },
                          "carrierCode": "DL",
                          "number": "2419",
                          "aircraft": {
                              "code": "319"
                          },
                          "operating": {
                              "carrierCode": "DL"
                          },
                          "duration": "PT1H42M",
                          "id": "6",
                          "numberOfStops": 0,
                          "blacklistedInEU": false
                      }
                  ]
              }
          ],
          "price": {
              "currency": "EUR",
              "total": "188.34",
              "base": "152.00",
              "fees": [
                  {
                      "amount": "0.00",
                      "type": "SUPPLIER"
                  },
                  {
                      "amount": "0.00",
                      "type": "TICKETING"
                  }
              ],
              "grandTotal": "188.34"
          },
          "pricingOptions": {
              "fareType": [
                  "PUBLISHED"
              ],
              "includedCheckedBagsOnly": false
          },
          "validatingAirlineCodes": [
              "DL"
          ],
          "travelerPricings": [
              {
                  "travelerId": "1",
                  "fareOption": "STANDARD",
                  "travelerType": "ADULT",
                  "price": {
                      "currency": "EUR",
                      "total": "188.34",
                      "base": "152.00"
                  },
                  "fareDetailsBySegment": [
                      {
                          "segmentId": "5",
                          "cabin": "ECONOMY",
                          "fareBasis": "XAUSA0BC",
                          "brandedFare": "BASICECON",
                          "class": "E",
                          "sliceDiceIndicator": "LOCAL_AVAILABILITY",
                          "includedCheckedBags": {
                              "quantity": 0
                          }
                      },
                      {
                          "segmentId": "6",
                          "cabin": "ECONOMY",
                          "fareBasis": "TAUSA0BC",
                          "brandedFare": "BASICECON",
                          "class": "E",
                          "sliceDiceIndicator": "LOCAL_AVAILABILITY",
                          "includedCheckedBags": {
                              "quantity": 0
                          }
                      }
                  ]
              }
          ]
      },
      {
          "type": "flight-offer",
          "id": "14",
          "source": "GDS",
          "instantTicketingRequired": false,
          "nonHomogeneous": false,
          "oneWay": false,
          "lastTicketingDate": "2021-10-18",
          "numberOfBookableSeats": 9,
          "itineraries": [
              {
                  "duration": "PT16H16M",
                  "segments": [
                      {
                          "departure": {
                              "iataCode": "ORD",
                              "terminal": "2",
                              "at": "2021-11-01T14:29:00"
                          },
                          "arrival": {
                              "iataCode": "RDU",
                              "terminal": "2",
                              "at": "2021-11-01T17:33:00"
                          },
                          "carrierCode": "DL",
                          "number": "4753",
                          "aircraft": {
                              "code": "CR7"
                          },
                          "duration": "PT2H4M",
                          "id": "17",
                          "numberOfStops": 0,
                          "blacklistedInEU": false
                      },
                      {
                          "departure": {
                              "iataCode": "RDU",
                              "terminal": "2",
                              "at": "2021-11-02T06:00:00"
                          },
                          "arrival": {
                              "iataCode": "JFK",
                              "terminal": "4",
                              "at": "2021-11-02T07:45:00"
                          },
                          "carrierCode": "DL",
                          "number": "2343",
                          "aircraft": {
                              "code": "319"
                          },
                          "operating": {
                              "carrierCode": "DL"
                          },
                          "duration": "PT1H45M",
                          "id": "18",
                          "numberOfStops": 0,
                          "blacklistedInEU": false
                      }
                  ]
              }
          ],
          "price": {
              "currency": "EUR",
              "total": "188.34",
              "base": "152.00",
              "fees": [
                  {
                      "amount": "0.00",
                      "type": "SUPPLIER"
                  },
                  {
                      "amount": "0.00",
                      "type": "TICKETING"
                  }
              ],
              "grandTotal": "188.34"
          },
          "pricingOptions": {
              "fareType": [
                  "PUBLISHED"
              ],
              "includedCheckedBagsOnly": false
          },
          "validatingAirlineCodes": [
              "DL"
          ],
          "travelerPricings": [
              {
                  "travelerId": "1",
                  "fareOption": "STANDARD",
                  "travelerType": "ADULT",
                  "price": {
                      "currency": "EUR",
                      "total": "188.34",
                      "base": "152.00"
                  },
                  "fareDetailsBySegment": [
                      {
                          "segmentId": "17",
                          "cabin": "ECONOMY",
                          "fareBasis": "XAUSA0BC",
                          "brandedFare": "BASICECON",
                          "class": "E",
                          "sliceDiceIndicator": "LOCAL_AVAILABILITY",
                          "includedCheckedBags": {
                              "quantity": 0
                          }
                      },
                      {
                          "segmentId": "18",
                          "cabin": "ECONOMY",
                          "fareBasis": "TAUSA0BC",
                          "brandedFare": "BASICECON",
                          "class": "E",
                          "sliceDiceIndicator": "LOCAL_AVAILABILITY",
                          "includedCheckedBags": {
                              "quantity": 0
                          }
                      }
                  ]
              }
          ]
      },
      {
          "type": "flight-offer",
          "id": "15",
          "source": "GDS",
          "instantTicketingRequired": false,
          "nonHomogeneous": false,
          "oneWay": false,
          "lastTicketingDate": "2021-10-18",
          "numberOfBookableSeats": 9,
          "itineraries": [
              {
                  "duration": "PT18H44M",
                  "segments": [
                      {
                          "departure": {
                              "iataCode": "ORD",
                              "terminal": "2",
                              "at": "2021-11-01T19:49:00"
                          },
                          "arrival": {
                              "iataCode": "RDU",
                              "terminal": "2",
                              "at": "2021-11-01T22:57:00"
                          },
                          "carrierCode": "DL",
                          "number": "5099",
                          "aircraft": {
                              "code": "CR7"
                          },
                          "duration": "PT2H8M",
                          "id": "32",
                          "numberOfStops": 0,
                          "blacklistedInEU": false
                      },
                      {
                          "departure": {
                              "iataCode": "RDU",
                              "terminal": "2",
                              "at": "2021-11-02T13:45:00"
                          },
                          "arrival": {
                              "iataCode": "JFK",
                              "terminal": "4",
                              "at": "2021-11-02T15:33:00"
                          },
                          "carrierCode": "DL",
                          "number": "4871",
                          "aircraft": {
                              "code": "CR9"
                          },
                          "duration": "PT1H48M",
                          "id": "33",
                          "numberOfStops": 0,
                          "blacklistedInEU": false
                      }
                  ]
              }
          ],
          "price": {
              "currency": "EUR",
              "total": "188.34",
              "base": "152.00",
              "fees": [
                  {
                      "amount": "0.00",
                      "type": "SUPPLIER"
                  },
                  {
                      "amount": "0.00",
                      "type": "TICKETING"
                  }
              ],
              "grandTotal": "188.34"
          },
          "pricingOptions": {
              "fareType": [
                  "PUBLISHED"
              ],
              "includedCheckedBagsOnly": false
          },
          "validatingAirlineCodes": [
              "DL"
          ],
          "travelerPricings": [
              {
                  "travelerId": "1",
                  "fareOption": "STANDARD",
                  "travelerType": "ADULT",
                  "price": {
                      "currency": "EUR",
                      "total": "188.34",
                      "base": "152.00"
                  },
                  "fareDetailsBySegment": [
                      {
                          "segmentId": "32",
                          "cabin": "ECONOMY",
                          "fareBasis": "XAUSA0BC",
                          "brandedFare": "BASICECON",
                          "class": "E",
                          "sliceDiceIndicator": "LOCAL_AVAILABILITY",
                          "includedCheckedBags": {
                              "quantity": 0
                          }
                      },
                      {
                          "segmentId": "33",
                          "cabin": "ECONOMY",
                          "fareBasis": "TAUSA0BC",
                          "brandedFare": "BASICECON",
                          "class": "E",
                          "sliceDiceIndicator": "LOCAL_AVAILABILITY",
                          "includedCheckedBags": {
                              "quantity": 0
                          }
                      }
                  ]
              }
          ]
      },
      {
          "type": "flight-offer",
          "id": "16",
          "source": "GDS",
          "instantTicketingRequired": false,
          "nonHomogeneous": false,
          "oneWay": false,
          "lastTicketingDate": "2021-10-18",
          "numberOfBookableSeats": 9,
          "itineraries": [
              {
                  "duration": "PT20H28M",
                  "segments": [
                      {
                          "departure": {
                              "iataCode": "ORD",
                              "terminal": "2",
                              "at": "2021-11-01T14:29:00"
                          },
                          "arrival": {
                              "iataCode": "RDU",
                              "terminal": "2",
                              "at": "2021-11-01T17:33:00"
                          },
                          "carrierCode": "DL",
                          "number": "4753",
                          "aircraft": {
                              "code": "CR7"
                          },
                          "duration": "PT2H4M",
                          "id": "19",
                          "numberOfStops": 0,
                          "blacklistedInEU": false
                      },
                      {
                          "departure": {
                              "iataCode": "RDU",
                              "terminal": "2",
                              "at": "2021-11-02T10:15:00"
                          },
                          "arrival": {
                              "iataCode": "JFK",
                              "terminal": "4",
                              "at": "2021-11-02T11:57:00"
                          },
                          "carrierCode": "DL",
                          "number": "2419",
                          "aircraft": {
                              "code": "319"
                          },
                          "operating": {
                              "carrierCode": "DL"
                          },
                          "duration": "PT1H42M",
                          "id": "20",
                          "numberOfStops": 0,
                          "blacklistedInEU": false
                      }
                  ]
              }
          ],
          "price": {
              "currency": "EUR",
              "total": "188.34",
              "base": "152.00",
              "fees": [
                  {
                      "amount": "0.00",
                      "type": "SUPPLIER"
                  },
                  {
                      "amount": "0.00",
                      "type": "TICKETING"
                  }
              ],
              "grandTotal": "188.34"
          },
          "pricingOptions": {
              "fareType": [
                  "PUBLISHED"
              ],
              "includedCheckedBagsOnly": false
          },
          "validatingAirlineCodes": [
              "DL"
          ],
          "travelerPricings": [
              {
                  "travelerId": "1",
                  "fareOption": "STANDARD",
                  "travelerType": "ADULT",
                  "price": {
                      "currency": "EUR",
                      "total": "188.34",
                      "base": "152.00"
                  },
                  "fareDetailsBySegment": [
                      {
                          "segmentId": "19",
                          "cabin": "ECONOMY",
                          "fareBasis": "XAUSA0BC",
                          "brandedFare": "BASICECON",
                          "class": "E",
                          "sliceDiceIndicator": "LOCAL_AVAILABILITY",
                          "includedCheckedBags": {
                              "quantity": 0
                          }
                      },
                      {
                          "segmentId": "20",
                          "cabin": "ECONOMY",
                          "fareBasis": "TAUSA0BC",
                          "brandedFare": "BASICECON",
                          "class": "E",
                          "sliceDiceIndicator": "LOCAL_AVAILABILITY",
                          "includedCheckedBags": {
                              "quantity": 0
                          }
                      }
                  ]
              }
          ]
      },
      {
          "type": "flight-offer",
          "id": "17",
          "source": "GDS",
          "instantTicketingRequired": false,
          "nonHomogeneous": false,
          "oneWay": false,
          "lastTicketingDate": "2021-10-18",
          "numberOfBookableSeats": 9,
          "itineraries": [
              {
                  "duration": "PT21H44M",
                  "segments": [
                      {
                          "departure": {
                              "iataCode": "ORD",
                              "terminal": "2",
                              "at": "2021-11-01T19:49:00"
                          },
                          "arrival": {
                              "iataCode": "RDU",
                              "terminal": "2",
                              "at": "2021-11-01T22:57:00"
                          },
                          "carrierCode": "DL",
                          "number": "5099",
                          "aircraft": {
                              "code": "CR7"
                          },
                          "duration": "PT2H8M",
                          "id": "34",
                          "numberOfStops": 0,
                          "blacklistedInEU": false
                      },
                      {
                          "departure": {
                              "iataCode": "RDU",
                              "terminal": "2",
                              "at": "2021-11-02T16:45:00"
                          },
                          "arrival": {
                              "iataCode": "JFK",
                              "terminal": "4",
                              "at": "2021-11-02T18:33:00"
                          },
                          "carrierCode": "DL",
                          "number": "5216",
                          "aircraft": {
                              "code": "CR9"
                          },
                          "duration": "PT1H48M",
                          "id": "35",
                          "numberOfStops": 0,
                          "blacklistedInEU": false
                      }
                  ]
              }
          ],
          "price": {
              "currency": "EUR",
              "total": "188.34",
              "base": "152.00",
              "fees": [
                  {
                      "amount": "0.00",
                      "type": "SUPPLIER"
                  },
                  {
                      "amount": "0.00",
                      "type": "TICKETING"
                  }
              ],
              "grandTotal": "188.34"
          },
          "pricingOptions": {
              "fareType": [
                  "PUBLISHED"
              ],
              "includedCheckedBagsOnly": false
          },
          "validatingAirlineCodes": [
              "DL"
          ],
          "travelerPricings": [
              {
                  "travelerId": "1",
                  "fareOption": "STANDARD",
                  "travelerType": "ADULT",
                  "price": {
                      "currency": "EUR",
                      "total": "188.34",
                      "base": "152.00"
                  },
                  "fareDetailsBySegment": [
                      {
                          "segmentId": "34",
                          "cabin": "ECONOMY",
                          "fareBasis": "XAUSA0BC",
                          "brandedFare": "BASICECON",
                          "class": "E",
                          "sliceDiceIndicator": "LOCAL_AVAILABILITY",
                          "includedCheckedBags": {
                              "quantity": 0
                          }
                      },
                      {
                          "segmentId": "35",
                          "cabin": "ECONOMY",
                          "fareBasis": "TAUSA0BC",
                          "brandedFare": "BASICECON",
                          "class": "E",
                          "sliceDiceIndicator": "LOCAL_AVAILABILITY",
                          "includedCheckedBags": {
                              "quantity": 0
                          }
                      }
                  ]
              }
          ]
      },
      {
          "type": "flight-offer",
          "id": "18",
          "source": "GDS",
          "instantTicketingRequired": false,
          "nonHomogeneous": false,
          "oneWay": false,
          "lastTicketingDate": "2021-10-18",
          "numberOfBookableSeats": 9,
          "itineraries": [
              {
                  "duration": "PT23H31M",
                  "segments": [
                      {
                          "departure": {
                              "iataCode": "ORD",
                              "terminal": "2",
                              "at": "2021-11-01T19:49:00"
                          },
                          "arrival": {
                              "iataCode": "RDU",
                              "terminal": "2",
                              "at": "2021-11-01T22:57:00"
                          },
                          "carrierCode": "DL",
                          "number": "5099",
                          "aircraft": {
                              "code": "CR7"
                          },
                          "duration": "PT2H8M",
                          "id": "23",
                          "numberOfStops": 0,
                          "blacklistedInEU": false
                      },
                      {
                          "departure": {
                              "iataCode": "RDU",
                              "terminal": "2",
                              "at": "2021-11-02T18:30:00"
                          },
                          "arrival": {
                              "iataCode": "JFK",
                              "terminal": "4",
                              "at": "2021-11-02T20:20:00"
                          },
                          "carrierCode": "DL",
                          "number": "2205",
                          "aircraft": {
                              "code": "319"
                          },
                          "operating": {
                              "carrierCode": "DL"
                          },
                          "duration": "PT1H50M",
                          "id": "24",
                          "numberOfStops": 0,
                          "blacklistedInEU": false
                      }
                  ]
              }
          ],
          "price": {
              "currency": "EUR",
              "total": "188.34",
              "base": "152.00",
              "fees": [
                  {
                      "amount": "0.00",
                      "type": "SUPPLIER"
                  },
                  {
                      "amount": "0.00",
                      "type": "TICKETING"
                  }
              ],
              "grandTotal": "188.34"
          },
          "pricingOptions": {
              "fareType": [
                  "PUBLISHED"
              ],
              "includedCheckedBagsOnly": false
          },
          "validatingAirlineCodes": [
              "DL"
          ],
          "travelerPricings": [
              {
                  "travelerId": "1",
                  "fareOption": "STANDARD",
                  "travelerType": "ADULT",
                  "price": {
                      "currency": "EUR",
                      "total": "188.34",
                      "base": "152.00"
                  },
                  "fareDetailsBySegment": [
                      {
                          "segmentId": "23",
                          "cabin": "ECONOMY",
                          "fareBasis": "XAUSA0BC",
                          "brandedFare": "BASICECON",
                          "class": "E",
                          "sliceDiceIndicator": "LOCAL_AVAILABILITY",
                          "includedCheckedBags": {
                              "quantity": 0
                          }
                      },
                      {
                          "segmentId": "24",
                          "cabin": "ECONOMY",
                          "fareBasis": "TAUSA0BC",
                          "brandedFare": "BASICECON",
                          "class": "E",
                          "sliceDiceIndicator": "LOCAL_AVAILABILITY",
                          "includedCheckedBags": {
                              "quantity": 0
                          }
                      }
                  ]
              }
          ]
      },
      {
          "type": "flight-offer",
          "id": "19",
          "source": "GDS",
          "instantTicketingRequired": false,
          "nonHomogeneous": false,
          "oneWay": false,
          "lastTicketingDate": "2021-10-18",
          "numberOfBookableSeats": 9,
          "itineraries": [
              {
                  "duration": "PT24H4M",
                  "segments": [
                      {
                          "departure": {
                              "iataCode": "ORD",
                              "terminal": "2",
                              "at": "2021-11-01T14:29:00"
                          },
                          "arrival": {
                              "iataCode": "RDU",
                              "terminal": "2",
                              "at": "2021-11-01T17:33:00"
                          },
                          "carrierCode": "DL",
                          "number": "4753",
                          "aircraft": {
                              "code": "CR7"
                          },
                          "duration": "PT2H4M",
                          "id": "1",
                          "numberOfStops": 0,
                          "blacklistedInEU": false
                      },
                      {
                          "departure": {
                              "iataCode": "RDU",
                              "terminal": "2",
                              "at": "2021-11-02T13:45:00"
                          },
                          "arrival": {
                              "iataCode": "JFK",
                              "terminal": "4",
                              "at": "2021-11-02T15:33:00"
                          },
                          "carrierCode": "DL",
                          "number": "4871",
                          "aircraft": {
                              "code": "CR9"
                          },
                          "duration": "PT1H48M",
                          "id": "2",
                          "numberOfStops": 0,
                          "blacklistedInEU": false
                      }
                  ]
              }
          ],
          "price": {
              "currency": "EUR",
              "total": "188.34",
              "base": "152.00",
              "fees": [
                  {
                      "amount": "0.00",
                      "type": "SUPPLIER"
                  },
                  {
                      "amount": "0.00",
                      "type": "TICKETING"
                  }
              ],
              "grandTotal": "188.34"
          },
          "pricingOptions": {
              "fareType": [
                  "PUBLISHED"
              ],
              "includedCheckedBagsOnly": false
          },
          "validatingAirlineCodes": [
              "DL"
          ],
          "travelerPricings": [
              {
                  "travelerId": "1",
                  "fareOption": "STANDARD",
                  "travelerType": "ADULT",
                  "price": {
                      "currency": "EUR",
                      "total": "188.34",
                      "base": "152.00"
                  },
                  "fareDetailsBySegment": [
                      {
                          "segmentId": "1",
                          "cabin": "ECONOMY",
                          "fareBasis": "XAUSA0BC",
                          "brandedFare": "BASICECON",
                          "class": "E",
                          "sliceDiceIndicator": "LOCAL_AVAILABILITY",
                          "includedCheckedBags": {
                              "quantity": 0
                          }
                      },
                      {
                          "segmentId": "2",
                          "cabin": "ECONOMY",
                          "fareBasis": "TAUSA0BC",
                          "brandedFare": "BASICECON",
                          "class": "E",
                          "sliceDiceIndicator": "LOCAL_AVAILABILITY",
                          "includedCheckedBags": {
                              "quantity": 0
                          }
                      }
                  ]
              }
          ]
      },
      {
          "type": "flight-offer",
          "id": "20",
          "source": "GDS",
          "instantTicketingRequired": false,
          "nonHomogeneous": false,
          "oneWay": false,
          "lastTicketingDate": "2021-10-18",
          "numberOfBookableSeats": 9,
          "itineraries": [
              {
                  "duration": "PT27H4M",
                  "segments": [
                      {
                          "departure": {
                              "iataCode": "ORD",
                              "terminal": "2",
                              "at": "2021-11-01T14:29:00"
                          },
                          "arrival": {
                              "iataCode": "RDU",
                              "terminal": "2",
                              "at": "2021-11-01T17:33:00"
                          },
                          "carrierCode": "DL",
                          "number": "4753",
                          "aircraft": {
                              "code": "CR7"
                          },
                          "duration": "PT2H4M",
                          "id": "3",
                          "numberOfStops": 0,
                          "blacklistedInEU": false
                      },
                      {
                          "departure": {
                              "iataCode": "RDU",
                              "terminal": "2",
                              "at": "2021-11-02T16:45:00"
                          },
                          "arrival": {
                              "iataCode": "JFK",
                              "terminal": "4",
                              "at": "2021-11-02T18:33:00"
                          },
                          "carrierCode": "DL",
                          "number": "5216",
                          "aircraft": {
                              "code": "CR9"
                          },
                          "duration": "PT1H48M",
                          "id": "4",
                          "numberOfStops": 0,
                          "blacklistedInEU": false
                      }
                  ]
              }
          ],
          "price": {
              "currency": "EUR",
              "total": "188.34",
              "base": "152.00",
              "fees": [
                  {
                      "amount": "0.00",
                      "type": "SUPPLIER"
                  },
                  {
                      "amount": "0.00",
                      "type": "TICKETING"
                  }
              ],
              "grandTotal": "188.34"
          },
          "pricingOptions": {
              "fareType": [
                  "PUBLISHED"
              ],
              "includedCheckedBagsOnly": false
          },
          "validatingAirlineCodes": [
              "DL"
          ],
          "travelerPricings": [
              {
                  "travelerId": "1",
                  "fareOption": "STANDARD",
                  "travelerType": "ADULT",
                  "price": {
                      "currency": "EUR",
                      "total": "188.34",
                      "base": "152.00"
                  },
                  "fareDetailsBySegment": [
                      {
                          "segmentId": "3",
                          "cabin": "ECONOMY",
                          "fareBasis": "XAUSA0BC",
                          "brandedFare": "BASICECON",
                          "class": "E",
                          "sliceDiceIndicator": "LOCAL_AVAILABILITY",
                          "includedCheckedBags": {
                              "quantity": 0
                          }
                      },
                      {
                          "segmentId": "4",
                          "cabin": "ECONOMY",
                          "fareBasis": "TAUSA0BC",
                          "brandedFare": "BASICECON",
                          "class": "E",
                          "sliceDiceIndicator": "LOCAL_AVAILABILITY",
                          "includedCheckedBags": {
                              "quantity": 0
                          }
                      }
                  ]
              }
          ]
      },
      {
          "type": "flight-offer",
          "id": "21",
          "source": "GDS",
          "instantTicketingRequired": false,
          "nonHomogeneous": false,
          "oneWay": false,
          "lastTicketingDate": "2021-10-18",
          "numberOfBookableSeats": 7,
          "itineraries": [
              {
                  "duration": "PT5H55M",
                  "segments": [
                      {
                          "departure": {
                              "iataCode": "ORD",
                              "terminal": "2",
                              "at": "2021-11-01T07:20:00"
                          },
                          "arrival": {
                              "iataCode": "BWI",
                              "at": "2021-11-01T10:19:00"
                          },
                          "carrierCode": "UA",
                          "number": "5434",
                          "aircraft": {
                              "code": "E7W"
                          },
                          "duration": "PT1H59M",
                          "id": "40",
                          "numberOfStops": 0,
                          "blacklistedInEU": false
                      },
                      {
                          "departure": {
                              "iataCode": "BWI",
                              "at": "2021-11-01T12:52:00"
                          },
                          "arrival": {
                              "iataCode": "JFK",
                              "terminal": "4",
                              "at": "2021-11-01T14:15:00"
                          },
                          "carrierCode": "DL",
                          "number": "5443",
                          "aircraft": {
                              "code": "CRJ"
                          },
                          "duration": "PT1H23M",
                          "id": "41",
                          "numberOfStops": 0,
                          "blacklistedInEU": false
                      }
                  ]
              }
          ],
          "price": {
              "currency": "EUR",
              "total": "375.92",
              "base": "331.00",
              "fees": [
                  {
                      "amount": "0.00",
                      "type": "SUPPLIER"
                  },
                  {
                      "amount": "0.00",
                      "type": "TICKETING"
                  }
              ],
              "grandTotal": "375.92"
          },
          "pricingOptions": {
              "fareType": [
                  "PUBLISHED"
              ],
              "includedCheckedBagsOnly": false
          },
          "validatingAirlineCodes": [
              "UA"
          ],
          "travelerPricings": [
              {
                  "travelerId": "1",
                  "fareOption": "STANDARD",
                  "travelerType": "ADULT",
                  "price": {
                      "currency": "EUR",
                      "total": "375.92",
                      "base": "331.00"
                  },
                  "fareDetailsBySegment": [
                      {
                          "segmentId": "40",
                          "cabin": "ECONOMY",
                          "fareBasis": "QAA3PWEN",
                          "brandedFare": "ECONOMY",
                          "class": "Q",
                          "includedCheckedBags": {
                              "quantity": 0
                          }
                      },
                      {
                          "segmentId": "41",
                          "cabin": "ECONOMY",
                          "fareBasis": "KAUSA0MC",
                          "brandedFare": "MAINCABIN",
                          "class": "K",
                          "includedCheckedBags": {
                              "quantity": 0
                          }
                      }
                  ]
              }
          ]
      },
      {
          "type": "flight-offer",
          "id": "22",
          "source": "GDS",
          "instantTicketingRequired": false,
          "nonHomogeneous": false,
          "oneWay": false,
          "lastTicketingDate": "2021-10-18",
          "numberOfBookableSeats": 7,
          "itineraries": [
              {
                  "duration": "PT4H44M",
                  "segments": [
                      {
                          "departure": {
                              "iataCode": "ORD",
                              "terminal": "1",
                              "at": "2021-11-01T14:05:00"
                          },
                          "arrival": {
                              "iataCode": "ROC",
                              "at": "2021-11-01T16:39:00"
                          },
                          "carrierCode": "UA",
                          "number": "2004",
                          "aircraft": {
                              "code": "320"
                          },
                          "operating": {
                              "carrierCode": "UA"
                          },
                          "duration": "PT1H34M",
                          "id": "30",
                          "numberOfStops": 0,
                          "blacklistedInEU": false
                      },
                      {
                          "departure": {
                              "iataCode": "ROC",
                              "at": "2021-11-01T18:11:00"
                          },
                          "arrival": {
                              "iataCode": "JFK",
                              "terminal": "4",
                              "at": "2021-11-01T19:49:00"
                          },
                          "carrierCode": "DL",
                          "number": "5275",
                          "aircraft": {
                              "code": "CR9"
                          },
                          "duration": "PT1H38M",
                          "id": "31",
                          "numberOfStops": 0,
                          "blacklistedInEU": false
                      }
                  ]
              }
          ],
          "price": {
              "currency": "EUR",
              "total": "382.37",
              "base": "337.00",
              "fees": [
                  {
                      "amount": "0.00",
                      "type": "SUPPLIER"
                  },
                  {
                      "amount": "0.00",
                      "type": "TICKETING"
                  }
              ],
              "grandTotal": "382.37"
          },
          "pricingOptions": {
              "fareType": [
                  "PUBLISHED"
              ],
              "includedCheckedBagsOnly": false
          },
          "validatingAirlineCodes": [
              "UA"
          ],
          "travelerPricings": [
              {
                  "travelerId": "1",
                  "fareOption": "STANDARD",
                  "travelerType": "ADULT",
                  "price": {
                      "currency": "EUR",
                      "total": "382.37",
                      "base": "337.00"
                  },
                  "fareDetailsBySegment": [
                      {
                          "segmentId": "30",
                          "cabin": "ECONOMY",
                          "fareBasis": "UAA4AFEN",
                          "brandedFare": "ECONOMY",
                          "class": "U",
                          "includedCheckedBags": {
                              "quantity": 0
                          }
                      },
                      {
                          "segmentId": "31",
                          "cabin": "ECONOMY",
                          "fareBasis": "KA7OA0MC",
                          "brandedFare": "MAINCABIN",
                          "class": "K",
                          "includedCheckedBags": {
                              "quantity": 0
                          }
                      }
                  ]
              }
          ]
      },
      {
          "type": "flight-offer",
          "id": "23",
          "source": "GDS",
          "instantTicketingRequired": false,
          "nonHomogeneous": false,
          "oneWay": false,
          "lastTicketingDate": "2021-10-18",
          "numberOfBookableSeats": 7,
          "itineraries": [
              {
                  "duration": "PT5H15M",
                  "segments": [
                      {
                          "departure": {
                              "iataCode": "ORD",
                              "terminal": "1",
                              "at": "2021-11-01T14:00:00"
                          },
                          "arrival": {
                              "iataCode": "RIC",
                              "at": "2021-11-01T17:13:00"
                          },
                          "carrierCode": "UA",
                          "number": "4563",
                          "aircraft": {
                              "code": "CR5"
                          },
                          "duration": "PT2H13M",
                          "id": "12",
                          "numberOfStops": 0,
                          "blacklistedInEU": false
                      },
                      {
                          "departure": {
                              "iataCode": "RIC",
                              "at": "2021-11-01T18:28:00"
                          },
                          "arrival": {
                              "iataCode": "JFK",
                              "terminal": "4",
                              "at": "2021-11-01T20:15:00"
                          },
                          "carrierCode": "DL",
                          "number": "4783",
                          "aircraft": {
                              "code": "CR9"
                          },
                          "duration": "PT1H47M",
                          "id": "13",
                          "numberOfStops": 0,
                          "blacklistedInEU": false
                      }
                  ]
              }
          ],
          "price": {
              "currency": "EUR",
              "total": "390.97",
              "base": "345.00",
              "fees": [
                  {
                      "amount": "0.00",
                      "type": "SUPPLIER"
                  },
                  {
                      "amount": "0.00",
                      "type": "TICKETING"
                  }
              ],
              "grandTotal": "390.97"
          },
          "pricingOptions": {
              "fareType": [
                  "PUBLISHED"
              ],
              "includedCheckedBagsOnly": false
          },
          "validatingAirlineCodes": [
              "UA"
          ],
          "travelerPricings": [
              {
                  "travelerId": "1",
                  "fareOption": "STANDARD",
                  "travelerType": "ADULT",
                  "price": {
                      "currency": "EUR",
                      "total": "390.97",
                      "base": "345.00"
                  },
                  "fareDetailsBySegment": [
                      {
                          "segmentId": "12",
                          "cabin": "ECONOMY",
                          "fareBasis": "QAA0OKEN",
                          "brandedFare": "ECONOMY",
                          "class": "Q",
                          "includedCheckedBags": {
                              "quantity": 0
                          }
                      },
                      {
                          "segmentId": "13",
                          "cabin": "ECONOMY",
                          "fareBasis": "KAUTA0MC",
                          "brandedFare": "MAINCABIN",
                          "class": "K",
                          "includedCheckedBags": {
                              "quantity": 0
                          }
                      }
                  ]
              }
          ]
      },
      {
          "type": "flight-offer",
          "id": "24",
          "source": "GDS",
          "instantTicketingRequired": false,
          "nonHomogeneous": false,
          "oneWay": false,
          "lastTicketingDate": "2021-10-18",
          "numberOfBookableSeats": 7,
          "itineraries": [
              {
                  "duration": "PT5H54M",
                  "segments": [
                      {
                          "departure": {
                              "iataCode": "ORD",
                              "terminal": "1",
                              "at": "2021-11-01T07:15:00"
                          },
                          "arrival": {
                              "iataCode": "SYR",
                              "at": "2021-11-01T09:58:00"
                          },
                          "carrierCode": "UA",
                          "number": "4611",
                          "aircraft": {
                              "code": "CR5"
                          },
                          "duration": "PT1H43M",
                          "id": "38",
                          "numberOfStops": 0,
                          "blacklistedInEU": false
                      },
                      {
                          "departure": {
                              "iataCode": "SYR",
                              "at": "2021-11-01T12:40:00"
                          },
                          "arrival": {
                              "iataCode": "JFK",
                              "terminal": "4",
                              "at": "2021-11-01T14:09:00"
                          },
                          "carrierCode": "DL",
                          "number": "5151",
                          "aircraft": {
                              "code": "CRJ"
                          },
                          "duration": "PT1H29M",
                          "id": "39",
                          "numberOfStops": 0,
                          "blacklistedInEU": false
                      }
                  ]
              }
          ],
          "price": {
              "currency": "EUR",
              "total": "399.57",
              "base": "353.00",
              "fees": [
                  {
                      "amount": "0.00",
                      "type": "SUPPLIER"
                  },
                  {
                      "amount": "0.00",
                      "type": "TICKETING"
                  }
              ],
              "grandTotal": "399.57"
          },
          "pricingOptions": {
              "fareType": [
                  "PUBLISHED"
              ],
              "includedCheckedBagsOnly": false
          },
          "validatingAirlineCodes": [
              "UA"
          ],
          "travelerPricings": [
              {
                  "travelerId": "1",
                  "fareOption": "STANDARD",
                  "travelerType": "ADULT",
                  "price": {
                      "currency": "EUR",
                      "total": "399.57",
                      "base": "353.00"
                  },
                  "fareDetailsBySegment": [
                      {
                          "segmentId": "38",
                          "cabin": "ECONOMY",
                          "fareBasis": "HAA4AFEN",
                          "brandedFare": "ECONOMY",
                          "class": "H",
                          "includedCheckedBags": {
                              "quantity": 0
                          }
                      },
                      {
                          "segmentId": "39",
                          "cabin": "ECONOMY",
                          "fareBasis": "KA0NA0MC",
                          "brandedFare": "MAINCABIN",
                          "class": "K",
                          "includedCheckedBags": {
                              "quantity": 0
                          }
                      }
                  ]
              }
          ]
      }
  ],
  "dictionaries": {
      "locations": {
          "ORD": {
              "cityCode": "CHI",
              "countryCode": "US"
          },
          "RDU": {
              "cityCode": "RDU",
              "countryCode": "US"
          },
          "BWI": {
              "cityCode": "WAS",
              "countryCode": "US"
          },
          "DTW": {
              "cityCode": "DTT",
              "countryCode": "US"
          },
          "BOS": {
              "cityCode": "BOS",
              "countryCode": "US"
          },
          "ROC": {
              "cityCode": "ROC",
              "countryCode": "US"
          },
          "RIC": {
              "cityCode": "RIC",
              "countryCode": "US"
          },
          "SYR": {
              "cityCode": "SYR",
              "countryCode": "US"
          },
          "JFK": {
              "cityCode": "NYC",
              "countryCode": "US"
          }
      },
      "aircraft": {
          "320": "AIRBUS A320",
          "E75": "EMBRAER 175",
          "E7W": "EMBRAER 175 (ENHANCED WINGLETS)",
          "CR5": "CANADAIR REGIONAL JET 550",
          "CR7": "CANADAIR REGIONAL JET 700",
          "CRJ": "CANADAIR REGIONAL JET",
          "CR9": "CANADAIR REGIONAL JET 900",
          "319": "AIRBUS A319",
          "738": "BOEING 737-800",
          "E90": "EMBRAER 190",
          "717": "BOEING 717-200"
      },
      "currencies": {
          "EUR": "EURO"
      },
      "carriers": {
          "AA": "AMERICAN AIRLINES",
          "B6": "JETBLUE AIRWAYS",
          "DL": "DELTA AIR LINES",
          "UA": "UNITED AIRLINES"
      }
  }
}