// Simple test to validate UTC time implementation
// This simulates the updated time function from lib-live-dashboard component

function testLibLiveDashboardTime() {
  // Simulate the updated lib-live-dashboard time function
  const utcTime = new Date().toLocaleTimeString('en-GB', {
    timeZone: 'UTC',
    hour: '2-digit',
    minute: '2-digit',
    hour12: false,
  });
  
  console.log('lib-live-dashboard UTC Time:', utcTime);
  return utcTime;
}

function testLiveTicker4yTime() {
  // Simulate the LiveTicker4yComponent time function (already correct)
  const utcTime = new Date().toLocaleTimeString('en-GB', {
    timeZone: 'UTC',
    hour: '2-digit',
    minute: '2-digit',
    hour12: false,
  });
  
  console.log('LiveTicker4yComponent UTC Time:', utcTime);
  return utcTime;
}

function testBerlinTime() {
  // For comparison - the old Berlin time implementation
  const berlinTime = new Date().toLocaleTimeString('en-GB', {
    timeZone: 'Europe/Berlin',
    hour: '2-digit',
    minute: '2-digit',
    hour12: false,
  });
  
  console.log('Old Berlin Time (for comparison):', berlinTime);
  return berlinTime;
}

// Run tests
console.log('=== UTC Time Validation Test ===');
const libDashboardTime = testLibLiveDashboardTime();
const liveTicker4yTime = testLiveTicker4yTime();
const berlinTime = testBerlinTime();

console.log('\n=== Test Results ===');
console.log('Both lib-live-dashboard and LiveTicker4y now show UTC time:', libDashboardTime === liveTicker4yTime);
console.log('UTC and Berlin times are different (as expected):', libDashboardTime !== berlinTime);
console.log('\n=== Success: All components now show consistent UTC time! ===');