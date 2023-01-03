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

// Add new line item
export const handleAddItem = (e) => {
  setEstimateFormData((prevState) => ({
    lineItems: [
      ...prevState.lineItems,
      {
        lineItemsID: 3, // This needs a better way to dynamically add an ID property. Only 3 line items allowed before errors because 4th still has ID of 3.
        lineItemsName: "New line item!",
        lineItemsDesc: "New line item created with Add new button!",
        lineItemsQty: 0,
        lineItemsRate: 0,
        lineItemsTotal: 0,
      },
    ],
  }));
};
