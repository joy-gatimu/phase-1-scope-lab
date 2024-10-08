window.customerName = 'bob';
window.bestCustomer = undefined;
const leastFavoriteCustomer = 'someone';

function upperCaseCustomerName() {
  window.customerName = window.customerName.toUpperCase();
}

function setBestCustomer() {
  window.bestCustomer = 'not bob';
}

function overwriteBestCustomer(newBestCustomer) {
  window.bestCustomer = newBestCustomer;
}

function changeLeastFavoriteCustomer() {
  throw new Error('Assignment to constant variable.');
}
