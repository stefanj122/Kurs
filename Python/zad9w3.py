def formatPrice(
    price, numberOfDecimals, currencySign, hasSpace=True, isCurrencyOnRight=True
):
    Round = lambda x, n: eval(
        '"%.'
        + str(int(n))
        + 'f" % '
        + repr(int(x) + round(float("." + str(float(x)).split(".")[1]), n))
    )
    formatedPrice = Round(price, numberOfDecimals)

    if isCurrencyOnRight and hasSpace:
        formatedPrice = formatedPrice + " " + currencySign
    elif isCurrencyOnRight and not hasSpace:
        formatedPrice += currencySign
    elif not isCurrencyOnRight and hasSpace:
        formatedPrice = currencySign + " " + formatedPrice
    elif ~isCurrencyOnRight and not hasSpace:
        formatedPrice = currencySign + formatedPrice
    return formatedPrice


print(formatPrice(100, 2, "$", True, False))
