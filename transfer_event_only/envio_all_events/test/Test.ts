import assert from "assert";
import { 
  TestHelpers,
  TransparentUpgradeableProxy_AdminChanged
} from "generated";
const { MockDb, TransparentUpgradeableProxy } = TestHelpers;

describe("TransparentUpgradeableProxy contract AdminChanged event tests", () => {
  // Create mock db
  const mockDb = MockDb.createMockDb();

  // Creating mock for TransparentUpgradeableProxy contract AdminChanged event
  const event = TransparentUpgradeableProxy.AdminChanged.createMockEvent({/* It mocks event fields with default values. You can overwrite them if you need */});

  it("TransparentUpgradeableProxy_AdminChanged is created correctly", async () => {
    // Processing the event
    const mockDbUpdated = await TransparentUpgradeableProxy.AdminChanged.processEvent({
      event,
      mockDb,
    });

    // Getting the actual entity from the mock database
    let actualTransparentUpgradeableProxyAdminChanged = mockDbUpdated.entities.TransparentUpgradeableProxy_AdminChanged.get(
      `${event.chainId}_${event.block.number}_${event.logIndex}`
    );

    // Creating the expected entity
    const expectedTransparentUpgradeableProxyAdminChanged: TransparentUpgradeableProxy_AdminChanged = {
      id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
      previousAdmin: event.params.previousAdmin,
      newAdmin: event.params.newAdmin,
    };
    // Asserting that the entity in the mock database is the same as the expected entity
    assert.deepEqual(actualTransparentUpgradeableProxyAdminChanged, expectedTransparentUpgradeableProxyAdminChanged, "Actual TransparentUpgradeableProxyAdminChanged should be the same as the expectedTransparentUpgradeableProxyAdminChanged");
  });
});
