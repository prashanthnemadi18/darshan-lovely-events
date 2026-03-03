import requests
import sys
from datetime import datetime
import json

class DarshanEventsAPITester:
    def __init__(self, base_url="https://lovely-events-co.preview.emergentagent.com"):
        self.base_url = base_url
        self.api_url = f"{base_url}/api"
        self.tests_run = 0
        self.tests_passed = 0
        self.failed_tests = []
        self.passed_tests = []

    def run_test(self, name, method, endpoint, expected_status, data=None, headers=None):
        """Run a single API test"""
        url = f"{self.api_url}{endpoint}"
        if headers is None:
            headers = {'Content-Type': 'application/json'}

        self.tests_run += 1
        print(f"\n🔍 Testing {name}...")
        print(f"   URL: {url}")
        
        try:
            if method == 'GET':
                response = requests.get(url, headers=headers)
            elif method == 'POST':
                response = requests.post(url, json=data, headers=headers)
            elif method == 'PUT':
                response = requests.put(url, json=data, headers=headers)
            elif method == 'DELETE':
                response = requests.delete(url, headers=headers)

            success = response.status_code == expected_status
            if success:
                self.tests_passed += 1
                self.passed_tests.append(name)
                print(f"✅ Passed - Status: {response.status_code}")
                if response.text:
                    try:
                        response_data = response.json()
                        print(f"   Response: {json.dumps(response_data, indent=2, default=str)}")
                    except:
                        print(f"   Response: {response.text}")
            else:
                self.failed_tests.append({
                    "test_name": name,
                    "expected_status": expected_status,
                    "actual_status": response.status_code,
                    "response": response.text,
                    "url": url
                })
                print(f"❌ Failed - Expected {expected_status}, got {response.status_code}")
                print(f"   Response: {response.text}")

            return success, response.json() if success and response.text else {}

        except Exception as e:
            self.failed_tests.append({
                "test_name": name,
                "error": str(e),
                "url": url
            })
            print(f"❌ Failed - Error: {str(e)}")
            return False, {}

    def test_root_endpoint(self):
        """Test root API endpoint"""
        return self.run_test("Root Endpoint", "GET", "/", 200)

    def test_create_status_check(self):
        """Test creating a status check"""
        data = {
            "client_name": f"test_client_{datetime.now().strftime('%H%M%S')}"
        }
        success, response = self.run_test("Create Status Check", "POST", "/status", 200, data)
        return success, response.get('id') if success else None

    def test_get_status_checks(self):
        """Test getting status checks"""
        return self.run_test("Get Status Checks", "GET", "/status", 200)

    def test_create_inquiry(self):
        """Test creating an inquiry (main contact form functionality)"""
        timestamp = datetime.now().strftime('%H%M%S')
        data = {
            "name": f"Test User {timestamp}",
            "phone": "9876543210",
            "event_type": "Wedding",
            "event_date": "2024-12-25",
            "message": "Test inquiry for wedding catering services"
        }
        success, response = self.run_test("Create Inquiry", "POST", "/inquiries", 200, data)
        return success, response.get('id') if success else None

    def test_get_inquiries(self):
        """Test getting inquiries"""
        return self.run_test("Get Inquiries", "GET", "/inquiries", 200)

    def run_all_tests(self):
        """Run comprehensive API tests"""
        print("🚀 Starting Darshan Lovely Events API Testing")
        print("=" * 50)

        # Test basic endpoints
        self.test_root_endpoint()
        
        # Test status check functionality
        status_success, status_id = self.test_create_status_check()
        self.test_get_status_checks()

        # Test inquiry functionality (core contact form feature)
        inquiry_success, inquiry_id = self.test_create_inquiry()
        self.test_get_inquiries()

        # Print summary
        print("\n" + "=" * 50)
        print(f"📊 Test Summary:")
        print(f"   Tests Run: {self.tests_run}")
        print(f"   Tests Passed: {self.tests_passed}")
        print(f"   Tests Failed: {len(self.failed_tests)}")
        print(f"   Success Rate: {(self.tests_passed/self.tests_run)*100:.1f}%")

        if self.failed_tests:
            print(f"\n❌ Failed Tests:")
            for failure in self.failed_tests:
                print(f"   - {failure['test_name']}")
                if 'expected_status' in failure:
                    print(f"     Expected: {failure['expected_status']}, Got: {failure['actual_status']}")
                if 'error' in failure:
                    print(f"     Error: {failure['error']}")

        if self.passed_tests:
            print(f"\n✅ Passed Tests:")
            for test in self.passed_tests:
                print(f"   - {test}")

        return self.tests_passed == self.tests_run

def main():
    tester = DarshanEventsAPITester()
    
    try:
        success = tester.run_all_tests()
        return 0 if success else 1
    except Exception as e:
        print(f"❌ Critical error during testing: {str(e)}")
        return 1

if __name__ == "__main__":
    sys.exit(main())