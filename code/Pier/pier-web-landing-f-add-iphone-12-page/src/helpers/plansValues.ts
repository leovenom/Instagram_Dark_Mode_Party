const PLANS_VALUES = {
  GALAXY_J7_PRO_64GB: {
    economic: {
      insuredValue: "472.0",
      price: "11.2",
      // discount: {               /*
      //   type: "percentage",     ** Put this object on when
      //   amount: 50,             ** you want to apply a promotion
      //   duration: 2,            */
      // },
    },
    premium: {
      insuredValue: "590.0",
      price: "15.3",
    },
  },
  IPHONE_5_16GB: {
    premium: {
      insuredValue: "350.0",
      price: "7.6",
    },
    economic: {
      insuredValue: "280.0",
      price: "5.5",
    },
  },
  GALAXY_S8_64GB: {
    premium: {
      insuredValue: "980.0",
      price: "21.9",
    },
    economic: {
      insuredValue: "784.0",
      price: "16.0",
    },
  },
  GALAXY_S8_PLUS_64GB: {
    premium: {
      insuredValue: "940.0",
      price: "21.1",
    },
    economic: {
      insuredValue: "752.0",
      price: "15.3",
    },
  },
  IPHONE_5_32GB: {
    premium: {
      insuredValue: "470.0",
      price: "10.1",
    },
    economic: {
      insuredValue: "376.0",
      price: "7.4",
    },
  },
  IPHONE_5_64GB: {
    premium: {
      insuredValue: "530.0",
      price: "11.4",
    },
    economic: {
      insuredValue: "424.0",
      price: "8.3",
    },
  },
  GALAXY_S8_PLUS_128GB: {
    premium: {
      insuredValue: "1320.0",
      price: "29.5",
    },
    economic: {
      insuredValue: "1056.0",
      price: "21.5",
    },
  },
  IPHONE_5C_8GB: {
    premium: {
      insuredValue: "260.0",
      price: "5.6",
    },
    economic: {
      insuredValue: "208.0",
      price: "4.1",
    },
  },
  GALAXY_S9_64GB: {
    premium: {
      insuredValue: "1400.0",
      price: "31.3",
    },
    economic: {
      insuredValue: "1120.0",
      price: "22.8",
    },
  },
  IPHONE_5C_16GB: {
    premium: {
      insuredValue: "300.0",
      price: "6.5",
    },
    economic: {
      insuredValue: "240.0",
      price: "4.7",
    },
  },
  GALAXY_S9_128GB: {
    premium: {
      insuredValue: "1400.0",
      price: "31.3",
    },
    economic: {
      insuredValue: "1120.0",
      price: "22.8",
    },
  },
  GALAXY_S9_PLUS_64GB: {
    premium: {
      insuredValue: "1680.0",
      price: "37.6",
    },
    economic: {
      insuredValue: "1344.0",
      price: "27.4",
    },
  },
  IPHONE_5C_32GB: {
    premium: {
      insuredValue: "490.0",
      price: "10.6",
    },
    economic: {
      insuredValue: "392.0",
      price: "7.7",
    },
  },
  GALAXY_S9_PLUS_128GB: {
    premium: {
      insuredValue: "1550.0",
      price: "34.7",
    },
    economic: {
      insuredValue: "1240.0",
      price: "25.2",
    },
  },
  IPHONE_5S_16GB: {
    premium: {
      insuredValue: "350.0",
      price: "7.6",
    },
    economic: {
      insuredValue: "280.0",
      price: "5.5",
    },
  },
  IPHONE_5S_32GB: {
    premium: {
      insuredValue: "470.0",
      price: "10.1",
    },
    economic: {
      insuredValue: "376.0",
      price: "7.4",
    },
  },
  GALAXY_S10_128GB: {
    premium: {
      insuredValue: "2020.0",
      price: "45.1",
    },
    economic: {
      insuredValue: "1620.0",
      price: "32.9",
    },
  },
  GALAXY_S10_LITE_128GB: {
    premium: {
      insuredValue: "2380.0",
      price: "53.1",
    },
    economic: {
      insuredValue: "1900.0",
      price: "38.6",
    },
  },
  IPHONE_5S_64GB: {
    premium: {
      insuredValue: "610.0",
      price: "13.1",
    },
    economic: {
      insuredValue: "488.0",
      price: "9.6",
    },
  },
  GALAXY_S10_512GB: {
    premium: {
      insuredValue: "2560.0",
      price: "57.3",
    },
    economic: {
      insuredValue: "2048.0",
      price: "41.7",
    },
  },
  IPHONE_SE_16GB: {
    premium: {
      insuredValue: "560.0",
      price: "12.1",
    },
    economic: {
      insuredValue: "448.0",
      price: "8.6",
    },
  },
  GALAXY_S10_PLUS_128GB: {
    premium: {
      insuredValue: "2170.0",
      price: "48.5",
    },
    economic: {
      insuredValue: "1740.0",
      price: "35.3",
    },
  },
  IPHONE_SE_32GB: {
    premium: {
      insuredValue: "620.0",
      price: "13.3",
    },
    economic: {
      insuredValue: "496.0",
      price: "9.7",
    },
  },
  GALAXY_S10_PLUS_512GB: {
    premium: {
      insuredValue: "3210.0",
      price: "71.8",
    },
    economic: {
      insuredValue: "2568.0",
      price: "52.2",
    },
  },
  IPHONE_SE_64GB: {
    premium: {
      insuredValue: "750.0",
      price: "16.1",
    },
    economic: {
      insuredValue: "600.0",
      price: "11.8",
    },
  },
  GALAXY_S10_PLUS_1024GB: {
    premium: {
      insuredValue: "4050.0",
      price: "90.5",
    },
    economic: {
      insuredValue: "3240.0",
      price: "65.9",
    },
  },
  IPHONE_SE_128GB: {
    premium: {
      insuredValue: "940.0",
      price: "20.2",
    },
    economic: {
      insuredValue: "752.0",
      price: "14.7",
    },
  },
  GALAXY_S10E_128GB: {
    premium: {
      insuredValue: "1940.0",
      price: "43.4",
    },
    economic: {
      insuredValue: "1552.0",
      price: "31.6",
    },
  },
  GALAXY_S20_128GB: {
    premium: {
      insuredValue: "3650.0",
      price: "81.5",
    },
    economic: {
      insuredValue: "2920.0",
      price: "59.3",
    },
  },
  GALAXY_S20_PLUS_128GB: {
    premium: {
      insuredValue: "4050.0",
      price: "90.4",
    },
    economic: {
      insuredValue: "3240.0",
      price: "65.8",
    },
  },
  GALAXY_S20_ULTRA_128GB: {
    premium: {
      insuredValue: "5650.0",
      price: "126.1",
    },
    economic: {
      insuredValue: "4520.0",
      price: "91.7",
    },
  },
  GALAXY_S20_ULTRA_512GB: {
    premium: {
      insuredValue: "6050.0",
      price: "135.0",
    },
    economic: {
      insuredValue: "4840.0",
      price: "98.2",
    },
  },
  GALAXY_S20_FE_128GB: {
    premium: {
      insuredValue: "3640.0",
      price: "81.2",
    },
    economic: {
      insuredValue: "2920.0",
      price: "59.3",
    },
  },
  GALAXY_S20_FE_256GB: {
    premium: {
      insuredValue: "4050.0",
      price: "90.4",
    },
    economic: {
      insuredValue: "3240.0",
      price: "65.8",
    },
  },
  IPHONE_6_16GB: {
    premium: {
      insuredValue: "710.0",
      price: "15.3",
    },
    economic: {
      insuredValue: "568.0",
      price: "11.1",
    },
  },
  IPHONE_6_32GB: {
    premium: {
      insuredValue: "900.0",
      price: "19.4",
    },
    economic: {
      insuredValue: "720.0",
      price: "14.1",
    },
  },
  IPHONE_6_64GB: {
    premium: {
      insuredValue: "920.0",
      price: "19.8",
    },
    economic: {
      insuredValue: "736.0",
      price: "14.4",
    },
  },
  IPHONE_6_128GB: {
    premium: {
      insuredValue: "1000.0",
      price: "21.5",
    },
    economic: {
      insuredValue: "800.0",
      price: "15.7",
    },
  },
  IPHONE_6_PLUS_16GB: {
    premium: {
      insuredValue: "1170.0",
      price: "25.1",
    },
    economic: {
      insuredValue: "936.0",
      price: "18.3",
    },
  },
  IPHONE_6_PLUS_64GB: {
    premium: {
      insuredValue: "1340.0",
      price: "28.8",
    },
    economic: {
      insuredValue: "1072.0",
      price: "21.0",
    },
  },
  IPHONE_6_PLUS_128GB: {
    premium: {
      insuredValue: "1420.0",
      price: "30.5",
    },
    economic: {
      insuredValue: "1136.0",
      price: "22.2",
    },
  },
  IPHONE_6S_16GB: {
    premium: {
      insuredValue: "890.0",
      price: "19.1",
    },
    economic: {
      insuredValue: "712.0",
      price: "13.9",
    },
  },
  IPHONE_6S_32GB: {
    premium: {
      insuredValue: "890.0",
      price: "19.0",
    },
    economic: {
      insuredValue: "710.0",
      price: "13.8",
    },
  },
  IPHONE_6S_64GB: {
    premium: {
      insuredValue: "980.0",
      price: "20.9",
    },
    economic: {
      insuredValue: "780.0",
      price: "15.1",
    },
  },
  IPHONE_6S_128GB: {
    premium: {
      insuredValue: "1110.0",
      price: "23.9",
    },
    economic: {
      insuredValue: "888.0",
      price: "17.4",
    },
  },
  IPHONE_6S_PLUS_16GB: {
    premium: {
      insuredValue: "1340.0",
      price: "28.8",
    },
    economic: {
      insuredValue: "1072.0",
      price: "21.0",
    },
  },
  IPHONE_6S_PLUS_32GB: {
    premium: {
      insuredValue: "1440.0",
      price: "30.9",
    },
    economic: {
      insuredValue: "1152.0",
      price: "22.5",
    },
  },
  IPHONE_6S_PLUS_64GB: {
    premium: {
      insuredValue: "1610.0",
      price: "34.6",
    },
    economic: {
      insuredValue: "1288.0",
      price: "25.2",
    },
  },
  IPHONE_6S_PLUS_128GB: {
    premium: {
      insuredValue: "1580.0",
      price: "33.9",
    },
    economic: {
      insuredValue: "1264.0",
      price: "24.7",
    },
  },
  IPHONE_7_32GB: {
    premium: {
      insuredValue: "1520.0",
      price: "32.7",
    },
    economic: {
      insuredValue: "1216.0",
      price: "23.8",
    },
  },
  IPHONE_7_128GB: {
    premium: {
      insuredValue: "1660.0",
      price: "35.7",
    },
    economic: {
      insuredValue: "1328.0",
      price: "25.9",
    },
  },
  IPHONE_7_256GB: {
    premium: {
      insuredValue: "1830.0",
      price: "39.3",
    },
    economic: {
      insuredValue: "1464.0",
      price: "28.6",
    },
  },
  IPHONE_7_PLUS_32GB: {
    premium: {
      insuredValue: "1990.0",
      price: "42.7",
    },
    economic: {
      insuredValue: "1592.0",
      price: "31.1",
    },
  },
  IPHONE_7_PLUS_128GB: {
    premium: {
      insuredValue: "2320.0",
      price: "49.8",
    },
    economic: {
      insuredValue: "1856.0",
      price: "36.2",
    },
  },
  IPHONE_7_PLUS_256GB: {
    premium: {
      insuredValue: "2270.0",
      price: "48.7",
    },
    economic: {
      insuredValue: "1816.0",
      price: "35.5",
    },
  },
  IPHONE_8_64GB: {
    premium: {
      insuredValue: "2120.0",
      price: "45.5",
    },
    economic: {
      insuredValue: "1696.0",
      price: "33.1",
    },
  },
  IPHONE_8_256GB: {
    premium: {
      insuredValue: "2760.0",
      price: "59.3",
    },
    economic: {
      insuredValue: "2208.0",
      price: "43.1",
    },
  },
  IPHONE_8_128GB: {
    premium: {
      insuredValue: "2930.0",
      price: "62.9",
    },
    economic: {
      insuredValue: "2344.0",
      price: "45.8",
    },
  },
  IPHONE_8_PLUS_64GB: {
    premium: {
      insuredValue: "2640.0",
      price: "56.7",
    },
    economic: {
      insuredValue: "2112.0",
      price: "41.2",
    },
  },
  IPHONE_8_PLUS_256GB: {
    premium: {
      insuredValue: "2970.0",
      price: "63.8",
    },
    economic: {
      insuredValue: "2376.0",
      price: "46.4",
    },
  },
  IPHONE_8_PLUS_128GB: {
    premium: {
      insuredValue: "3080.0",
      price: "65.5",
    },
    economic: {
      insuredValue: "2460.0",
      price: "47.6",
    },
  },
  IPHONE_X_64GB: {
    premium: {
      insuredValue: "3270.0",
      price: "70.2",
    },
    economic: {
      insuredValue: "2616.0",
      price: "51.1",
    },
  },
  IPHONE_X_256GB: {
    premium: {
      insuredValue: "3560.0",
      price: "76.4",
    },
    economic: {
      insuredValue: "2848.0",
      price: "55.6",
    },
  },
  IPHONE_XR_64GB: {
    premium: {
      insuredValue: "2760.0",
      price: "58.7",
    },
    economic: {
      insuredValue: "2210.0",
      price: "42.7",
    },
  },
  IPHONE_XR_128GB: {
    premium: {
      insuredValue: "3130.0",
      price: "67.2",
    },
    economic: {
      insuredValue: "2504.0",
      price: "48.9",
    },
  },
  IPHONE_XR_256GB: {
    premium: {
      insuredValue: "3600.0",
      price: "77.3",
    },
    economic: {
      insuredValue: "2880.0",
      price: "56.2",
    },
  },
  IPHONE_XS_64GB: {
    premium: {
      insuredValue: "4180.0",
      price: "89.7",
    },
    economic: {
      insuredValue: "3344.0",
      price: "65.3",
    },
  },
  IPHONE_XS_256GB: {
    premium: {
      insuredValue: "4670.0",
      price: "100.2",
    },
    economic: {
      insuredValue: "3736.0",
      price: "72.9",
    },
  },
  IPHONE_XS_512GB: {
    premium: {
      insuredValue: "4820.0",
      price: "103.4",
    },
    economic: {
      insuredValue: "3856.0",
      price: "75.2",
    },
  },
  IPHONE_XS_MAX_64GB: {
    premium: {
      insuredValue: "4610.0",
      price: "98.9",
    },
    economic: {
      insuredValue: "3688.0",
      price: "72.0",
    },
  },
  IPHONE_XS_MAX_256GB: {
    premium: {
      insuredValue: "5070.0",
      price: "108.8",
    },
    economic: {
      insuredValue: "4056.0",
      price: "79.1",
    },
  },
  IPHONE_XS_MAX_512GB: {
    premium: {
      insuredValue: "5460.0",
      price: "117.2",
    },
    economic: {
      insuredValue: "4368.0",
      price: "85.2",
    },
  },
  IPHONE_11_64GB: {
    premium: {
      insuredValue: "3500.0",
      price: "74.4",
    },
    economic: {
      insuredValue: "2800.0",
      price: "54.1",
    },
  },
  GALAXY_J2_PRO_2018_16GB: {
    premium: {
      insuredValue: "340.0",
      price: "8.9",
    },
    economic: {
      insuredValue: "272.0",
      price: "6.5",
    },
  },
  IPHONE_11_256GB: {
    premium: {
      insuredValue: "4140.0",
      price: "88.0",
    },
    economic: {
      insuredValue: "3310.0",
      price: "64.0",
    },
  },
  IPHONE_11_128GB: {
    premium: {
      insuredValue: "3900.0",
      price: "82.9",
    },
    economic: {
      insuredValue: "3120.0",
      price: "60.3",
    },
  },
  IPHONE_11_PRO_MAX_512GB: {
    premium: {
      insuredValue: "7180.0",
      price: "152.6",
    },
    economic: {
      insuredValue: "5740.0",
      price: "110.9",
    },
  },
  IPHONE_11_PRO_64GB: {
    premium: {
      insuredValue: "5130.0",
      price: "109.0",
    },
    economic: {
      insuredValue: "4100.0",
      price: "79.2",
    },
  },
  GALAXY_J5_PRO_32GB: {
    premium: {
      insuredValue: "450.0",
      price: "11.7",
    },
    economic: {
      insuredValue: "360.0",
      price: "8.5",
    },
  },
  IPHONE_11_PRO_512GB: {
    premium: {
      insuredValue: "6700.0",
      price: "142.4",
    },
    economic: {
      insuredValue: "5360.0",
      price: "103.6",
    },
  },
  IPHONE_11_PRO_MAX_64GB: {
    premium: {
      insuredValue: "6080.0",
      price: "130.5",
    },
    economic: {
      insuredValue: "4864.0",
      price: "94.9",
    },
  },
  IPHONE_11_PRO_MAX_256GB: {
    premium: {
      insuredValue: "6720.0",
      price: "144.2",
    },
    economic: {
      insuredValue: "5376.0",
      price: "104.9",
    },
  },
  IPHONE_11_PRO_256GB: {
    premium: {
      insuredValue: "5850.0",
      price: "124.3",
    },
    economic: {
      insuredValue: "4680.0",
      price: "90.4",
    },
  },
  IPHONE_SE_2020_64GB: {
    premium: {
      insuredValue: "2650.0",
      price: "56.3",
    },
    economic: {
      insuredValue: "2120.0",
      price: "41.0",
    },
  },
  IPHONE_SE_2020_128GB: {
    premium: {
      insuredValue: "2850",
      price: "60.6",
    },
    economic: {
      insuredValue: "2280.0",
      price: "44.10",
    },
  },
  IPHONE_SE_2020_256GB: {
    premium: {
      insuredValue: "3120",
      price: "66.30",
    },
    economic: {
      insuredValue: "2500",
      price: "48.3",
    },
  },
  IPHONE_12_MINI_64GB: {
    premium: {
      insuredValue: "5670.0",
      price: "120.5",
    },
    economic: {
      insuredValue: "4540.0",
      price: "87.70",
    },
  },
  IPHONE_12_MINI_128GB: {
    premium: {
      insuredValue: "6070.0",
      price: "129.0",
    },
    economic: {
      insuredValue: "4860.0",
      price: "93.90",
    },
  },
  IPHONE_12_MINI_256GB: {
    premium: {
      insuredValue: "6880.0",
      price: "146.2",
    },
    economic: {
      insuredValue: "5510.0",
      price: "106.5",
    },
  },
  IPHONE_12_64GB: {
    premium: {
      insuredValue: "6480.0",
      price: "137.7",
    },
    economic: {
      insuredValue: "5180.0",
      price: "100.10",
    },
  },
  IPHONE_12_128GB: {
    premium: {
      insuredValue: "6880.0",
      price: "146.2",
    },
    economic: {
      insuredValue: "5510.0",
      price: "106.5",
    },
  },
  IPHONE_12_256GB: {
    premium: {
      insuredValue: "7690.0",
      price: "163.4",
    },
    economic: {
      insuredValue: "6160.0",
      price: "119.0",
    },
  },
  IPHONE_12_PRO_128GB: {
    premium: {
      insuredValue: "8100.0",
      price: "172.1",
    },
    economic: {
      insuredValue: "6480.0",
      price: "125.2",
    },
  },
  IPHONE_12_PRO_256GB: {
    premium: {
      insuredValue: "8910.0",
      price: "189.30",
    },
    economic: {
      insuredValue: "7130.0",
      price: "137.8",
    },
  },
  IPHONE_12_PRO_512GB: {
    premium: {
      insuredValue: "10530.0",
      price: "223.8",
    },
    economic: {
      insuredValue: "8420.0",
      price: "162.7",
    },
  },
  IPHONE_12_PRO_MAX_128GB: {
    premium: {
      insuredValue: "8910.0",
      price: "189.3",
    },
    economic: {
      insuredValue: "7130.0",
      price: "137.8",
    },
  },
  IPHONE_12_PRO_MAX_256GB: {
    premium: {
      insuredValue: "9720.0",
      price: "206.5",
    },
    economic: {
      insuredValue: "7780.0",
      price: "150.3",
    },
  },
  IPHONE_12_PRO_MAX_512GB: {
    premium: {
      insuredValue: "11340.0",
      price: "241.0",
    },
    economic: {
      insuredValue: "9070.0",
      price: "175.2",
    },
  },
  GALAXY_J2_PRIME_8GB: {
    premium: {
      insuredValue: "300.0",
      price: "7.8",
    },
    economic: {
      insuredValue: "240.0",
      price: "5.7",
    },
  },
  GALAXY_J2_PRIME_16GB: {
    premium: {
      insuredValue: "380.0",
      price: "9.9",
    },
    economic: {
      insuredValue: "304.0",
      price: "7.2",
    },
  },
  GALAXY_J5_PRIME_32GB: {
    premium: {
      insuredValue: "400.0",
      price: "10.4",
    },
    economic: {
      insuredValue: "320.0",
      price: "7.6",
    },
  },
  GALAXY_J7_PRIME_32GB: {
    premium: {
      insuredValue: "470.0",
      price: "12.2",
    },
    economic: {
      insuredValue: "376.0",
      price: "8.9",
    },
  },
  GALAXY_J7_PRIME_2_32GB: {
    premium: {
      insuredValue: "540.0",
      price: "14.0",
    },
    economic: {
      insuredValue: "432.0",
      price: "10.2",
    },
  },
  GALAXY_A10_32GB: {
    premium: {
      insuredValue: "550.0",
      price: "15.3",
    },
    economic: {
      insuredValue: "440.0",
      price: "10.4",
    },
  },
  GALAXY_A10S_32GB: {
    premium: {
      insuredValue: "600.0",
      price: "15.1",
    },
    economic: {
      insuredValue: "480.0",
      price: "9.8",
    },
  },
  GALAXY_A20_32GB: {
    premium: {
      insuredValue: "670.0",
      price: "18.6",
    },
    economic: {
      insuredValue: "536.0",
      price: "12.7",
    },
  },
  GALAXY_A20S_32GB: {
    premium: {
      insuredValue: "630.0",
      price: "15.8",
    },
    economic: {
      insuredValue: "504.0",
      price: "10.3",
    },
  },
  GALAXY_A30_64GB: {
    premium: {
      insuredValue: "870.0",
      price: "24.2",
    },
    economic: {
      insuredValue: "696.0",
      price: "16.4",
    },
  },
  GALAXY_A30S_64GB: {
    premium: {
      insuredValue: "880.0",
      price: "22.1",
    },
    economic: {
      insuredValue: "704.0",
      price: "14.4",
    },
  },
  GALAXY_A50_64GB: {
    premium: {
      insuredValue: "1080.0",
      price: "30.0",
    },
    economic: {
      insuredValue: "864.0",
      price: "20.4",
    },
  },
  GALAXY_A51_128GB: {
    premium: {
      insuredValue: "1530.0",
      price: "38.3",
    },
    economic: {
      insuredValue: "1224.0",
      price: "24.9",
    },
  },
  GALAXY_A70_128GB: {
    premium: {
      insuredValue: "1380.0",
      price: "38.3",
    },
    economic: {
      insuredValue: "1104.0",
      price: "26.1",
    },
  },
  GALAXY_A71_128GB: {
    premium: {
      insuredValue: "1660.0",
      price: "37.1",
    },
    economic: {
      insuredValue: "1330.0",
      price: "27.0",
    },
  },
  GALAXY_A80_128GB: {
    premium: {
      insuredValue: "1840.0",
      price: "41.1",
    },
    economic: {
      insuredValue: "1470.0",
      price: "29.9",
    },
  },
  GALAXY_A9_128GB: {
    premium: {
      insuredValue: "1300.0",
      price: "36.1",
    },
    economic: {
      insuredValue: "1040.0",
      price: "24.6",
    },
  },
  GALAXY_A8_64GB: {
    premium: {
      insuredValue: "770.0",
      price: "21.4",
    },
    economic: {
      insuredValue: "616.0",
      price: "14.6",
    },
  },
  GALAXY_A8_PLUS_64GB: {
    premium: {
      insuredValue: "920.0",
      price: "20.6",
    },
    economic: {
      insuredValue: "740.0",
      price: "15.1",
    },
  },
  GALAXY_A7_64GB: {
    premium: {
      insuredValue: "910.0",
      price: "25.3",
    },
    economic: {
      insuredValue: "728.0",
      price: "17.2",
    },
  },
  GALAXY_A7_128GB: {
    premium: {
      insuredValue: "1040.0",
      price: "28.9",
    },
    economic: {
      insuredValue: "832.0",
      price: "19.7",
    },
  },
  GALAXY_A50_128GB: {
    premium: {
      insuredValue: "1150.0",
      price: "31.9",
    },
    economic: {
      insuredValue: "920.0",
      price: "21.7",
    },
  },
  GALAXY_A6_PLUS_64GB: {
    premium: {
      insuredValue: "670.0",
      price: "18.6",
    },
    economic: {
      insuredValue: "536.0",
      price: "12.7",
    },
  },
  GALAXY_A11_64GB: {
    premium: {
      insuredValue: "890.0",
      price: "19.9",
    },
    economic: {
      insuredValue: "710.0",
      price: "14.4",
    },
  },
  GALAXY_A21S_64GB: {
    premium: {
      insuredValue: "1050.0",
      price: "23.5",
    },
    economic: {
      insuredValue: "840.0",
      price: "17.1",
    },
  },
  GALAXY_A31_128GB: {
    premium: {
      insuredValue: "1260.0",
      price: "28.2",
    },
    economic: {
      insuredValue: "1010.0",
      price: "20.5",
    },
  },
  GALAXY_NOTE_8_64GB: {
    premium: {
      insuredValue: "1300.0",
      price: "29.0",
    },
    economic: {
      insuredValue: "1040.0",
      price: "21.1",
    },
  },
  GALAXY_NOTE_8_128GB: {
    premium: {
      insuredValue: "1550.0",
      price: "34.6",
    },
    economic: {
      insuredValue: "1240.0",
      price: "25.2",
    },
  },
  GALAXY_NOTE_9_128GB: {
    premium: {
      insuredValue: "1960.0",
      price: "63.1",
    },
    economic: {
      insuredValue: "1568.0",
      price: "37.0",
    },
  },
  GALAXY_NOTE_9_512GB: {
    premium: {
      insuredValue: "2570.0",
      price: "82.7",
    },
    economic: {
      insuredValue: "2057.0",
      price: "48.5",
    },
  },
  GALAXY_NOTE_10_256GB: {
    premium: {
      insuredValue: "3490.0",
      price: "77.9",
    },
    economic: {
      insuredValue: "2790.0",
      price: "56.6",
    },
  },
  GALAXY_NOTE_10_PLUS_256GB: {
    premium: {
      insuredValue: "3810.0",
      price: "85.0",
    },
    economic: {
      insuredValue: "3050.0",
      price: "61.9",
    },
  },
  GALAXY_NOTE_10_PLUS_512GB: {
    premium: {
      insuredValue: "4690.0",
      price: "104.7",
    },
    economic: {
      insuredValue: "3750.0",
      price: "76.1",
    },
  },
  GALAXY_NOTE_10_LITE_128GB: {
    premium: {
      insuredValue: "2020.0",
      price: "45.1",
    },
    economic: {
      insuredValue: "1620.0",
      price: "32.9",
    },
  },
  GALAXY_NOTE_20_256GB: {
    premium: {
      insuredValue: "4050.0",
      price: "90.4",
    },
    economic: {
      insuredValue: "3240.0",
      price: "65.8",
    },
  },
  GALAXY_NOTE_20_ULTRA_256GB: {
    premium: {
      insuredValue: "4860.0",
      price: "108.5",
    },
    economic: {
      insuredValue: "3890.0",
      price: "78.9",
    },
  },
  GALAXY_NOTE_20_ULTRA_512GB: {
    premium: {
      insuredValue: "5350.0",
      price: "119.4",
    },
    economic: {
      insuredValue: "4280.0",
      price: "86.8",
    },
  },
  GALAXY_J4_CORE_16GB: {
    premium: {
      insuredValue: "400.0",
      price: "10.4",
    },
    economic: {
      insuredValue: "320.0",
      price: "7.6",
    },
  },
  GALAXY_J4_16GB: {
    premium: {
      insuredValue: "410.0",
      price: "10.7",
    },
    economic: {
      insuredValue: "328.0",
      price: "7.8",
    },
  },
  GALAXY_J4_32GB: {
    premium: {
      insuredValue: "470.0",
      price: "12.2",
    },
    economic: {
      insuredValue: "376.0",
      price: "8.9",
    },
  },
  GALAXY_J4_PLUS_32GB: {
    premium: {
      insuredValue: "540.0",
      price: "14.0",
    },
    economic: {
      insuredValue: "432.0",
      price: "10.2",
    },
  },
  GALAXY_J6_32GB: {
    premium: {
      insuredValue: "550.0",
      price: "14.3",
    },
    economic: {
      insuredValue: "440.0",
      price: "10.4",
    },
  },
  GALAXY_J6_64GB: {
    premium: {
      insuredValue: "580.0",
      price: "15.1",
    },
    economic: {
      insuredValue: "464.0",
      price: "11.0",
    },
  },
  GALAXY_J6_PLUS_32GB: {
    premium: {
      insuredValue: "590.0",
      price: "15.3",
    },
    economic: {
      insuredValue: "472.0",
      price: "11.2",
    },
  },
  GALAXY_J7_DUO_32GB: {
    premium: {
      insuredValue: "720.0",
      price: "18.7",
    },
    economic: {
      insuredValue: "576.0",
      price: "13.6",
    },
  },
  GALAXY_J7_NEO_16GB: {
    premium: {
      insuredValue: "420.0",
      price: "10.9",
    },
    economic: {
      insuredValue: "336.0",
      price: "8.0",
    },
  },
  GALAXY_J8_64GB: {
    premium: {
      insuredValue: "770.0",
      price: "20.0",
    },
    economic: {
      insuredValue: "616.0",
      price: "14.6",
    },
  },
  MOTOROLA_ONE_MACRO_64GB: {
    economic: {
      insuredValue: 780,
      price: 15.3,
    },
    premium: {
      insuredValue: 970,
      price: 22.5,
    },
  },
  MOTOROLA_ONE_ACTION_128GB: {
    economic: {
      insuredValue: 940,
      price: 20.7,
    },
    premium: {
      insuredValue: 1170,
      price: 28.4,
    },
  },
  MOTOROLA_ONE_64GB: {
    economic: {
      insuredValue: 750,
      price: 17,
    },
    premium: {
      insuredValue: 940,
      price: 23.4,
    },
  },
  MOTOROLA_ONE_HYPER_128GB: {
    economic: {
      insuredValue: 1150,
      price: 23.6,
    },
    premium: {
      insuredValue: 1440,
      price: 34.6,
    },
  },
  MOTOROLA_ONE_VISION_128GB: {
    economic: {
      insuredValue: 1070,
      price: 22.8,
    },
    premium: {
      insuredValue: 1340,
      price: 31.4,
    },
  },
  MOTOROLA_ONE_ZOOM_128GB: {
    economic: {
      insuredValue: 1330,
      price: 27,
    },
    premium: {
      insuredValue: 1660,
      price: 39.9,
    },
  },
  MOTOROLA_ONE_FUSION_64GB: {
    economic: {
      insuredValue: 1170,
      price: 24.9,
    },
    premium: {
      insuredValue: 1460,
      price: 34.2,
    },
  },
  MOTOROLA_ONE_FUSION_128GB: {
    economic: {
      insuredValue: 1170,
      price: 24.9,
    },
    premium: {
      insuredValue: 1460,
      price: 34.2,
    },
  },
  "MOTOROLA_ONE_FUSION+_128GB": {
    economic: {
      insuredValue: 1370,
      price: 27.6,
    },
    premium: {
      insuredValue: 1710,
      price: 40,
    },
  },
  MOTO_G8_64GB: {
    economic: {
      insuredValue: 840,
      price: 17.7,
    },
    premium: {
      insuredValue: 1050,
      price: 25.9,
    },
  },
  MOTO_G8_PLAY_32GB: {
    economic: {
      insuredValue: 660,
      price: 14.6,
    },
    premium: {
      insuredValue: 830,
      price: 20.2,
    },
  },
  MOTO_G8_PLUS_64GB: {
    economic: {
      insuredValue: 860,
      price: 17.7,
    },
    premium: {
      insuredValue: 1080,
      price: 26,
    },
  },
  MOTO_G8_POWER_64GB: {
    economic: {
      insuredValue: 940,
      price: 18.9,
    },
    premium: {
      insuredValue: 1170,
      price: 25.9,
    },
  },
  MOTO_G8_POWER_LITE_64GB: {
    economic: {
      insuredValue: 840,
      price: 17.9,
    },
    premium: {
      insuredValue: 1050,
      price: 24.6,
    },
  },
  MOTO_G9_PLAY_64GB: {
    economic: {
      insuredValue: 890,
      price: 18.1,
    },
    premium: {
      insuredValue: 1120,
      price: 25,
    },
  },
  MOTO_G9_PLUS_128GB: {
    economic: {
      insuredValue: 1300,
      price: 26.4,
    },
    premium: {
      insuredValue: 1620,
      price: 36.2,
    },
  },
  MOTOROLA_EDGE_128GB: {
    economic: {
      insuredValue: 2270,
      price: 46.1,
    },
    premium: {
      insuredValue: 2830,
      price: 63.2,
    },
  },
  MOTOROLA_EDGE_PLUS_256GB: {
    economic: {
      insuredValue: 3550,
      price: 72,
    },
    premium: {
      insuredValue: 4440,
      price: 99.1,
    },
  },
};

export default PLANS_VALUES;
