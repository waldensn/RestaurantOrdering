"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var order_data_service_service_1 = require("./order-data-service.service");
describe('OrderDataService', function () {
    beforeEach(function () { return testing_1.TestBed.configureTestingModule({}); });
    it('should be created', function () {
        var service = testing_1.TestBed.get(order_data_service_service_1.OrderDataService);
        expect(service).toBeTruthy();
    });
});
//# sourceMappingURL=order-data-service.service.spec.js.map