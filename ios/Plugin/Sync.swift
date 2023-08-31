import Foundation

@objc public class Sync: NSObject {
    @objc public func echo(_ value: String) -> String {
        print(value)
        return value
    }
}
