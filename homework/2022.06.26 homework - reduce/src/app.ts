rentedAllColors[brandCar] = colors.reduce((acc, cur, i) => {
    fee = colorPercentages[colors[i]];
    price = currentCar.rentPriceTotal(fee);

    return acc + price;
  }, 0);