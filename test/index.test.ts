import {hello} from "../src";

describe('hello', () => {
  it('should handle word', function () {
    expect(hello()).toBe('hello world')

    expect(hello('小家伙')).toBe('hello 小家伙')
  })
})
