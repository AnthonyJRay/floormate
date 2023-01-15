// Qty Input
export const handleQtyInput = (e, id) => {
  estimateFormData.lineItems.map((item) => {
    if (item.lineItemsID === id + 1) {
      item.lineItemsQty = e.target.value;
      if (item.lineItemsQty < 0) {
        item.lineItemsQty = 0;
      }
      let qty = parseFloat(item.lineItemsQty);
      let rate = parseFloat(item.lineItemsRate);
      if (isNaN(qty)) {
        qty = 0;
      }
      if (isNaN(rate)) {
        rate = 0;
      }
      item.lineItemsTotal = qty * rate;
      setEstimateFormData((prevState) => ({
        lineItems: [...prevState.lineItems],
      }));
    }
  });
  handleInputTotals();
};

// Rate Input
export const handleRateInput = (e, id) => {
  estimateFormData.lineItems.map((item) => {
    if (item.lineItemsID === id + 1) {
      item.lineItemsRate = e.target.value;
      if (item.lineItemsRate < 0) {
        item.lineItemsRate = 0;
      }
      let qty = parseFloat(item.lineItemsQty);
      let rate = parseFloat(item.lineItemsRate);
      if (isNaN(qty)) {
        qty = 0;
      }
      if (isNaN(rate)) {
        rate = 0;
      }
      item.lineItemsTotal = qty * rate;
      setEstimateFormData((prevState) => ({
        lineItems: [...prevState.lineItems],
      }));
    }
  });
  handleInputTotals();
};

export function getLineItemTotals(item) {
  // console.log(item);
  let qty = parseFloat(item.quatity) === undefined ? 0 : item.quantity;
  let rate = parseFloat(item.rate) === undefined ? 0 : item.rate;
  const total = qty * rate;
  return total;
}

// Get Tax
export const handleTaxInput = (e) => {
  let taxInput = e.target.value;
  let taxRate = parseFloat(taxInput) / 100;
  if (isNaN(taxRate)) {
    taxRate = 0;
  }
  let subtotal = estimateFormData.estimateSubTotal;
  let taxAmount = subtotal * taxRate;
  if (isNaN(taxInput)) {
    taxRate = 0;
  }

  setEstimateFormData((prevState) => ({
    ...prevState,
    estimateTaxRate: taxInput,
    estimateTotal: subtotal + taxAmount,
  }));
  return taxInput;
};

// Get Totals from inputs
export const handleInputTotals = () => {
  let subtotal = 0;
  estimateFormData.lineItems.map((item) => {
    subtotal = subtotal + item.lineItemsTotal;
  });
  if (subtotal === estimateFormData.estimateSubTotal) {
    return;
  }
  setEstimateFormData((prevState) => ({
    ...prevState,
    estimateSubTotal: subtotal,
  }));
  return subtotal;
};
