import { renderHook, act } from "@testing-library/react-hooks"
import { useForm } from "../src/index"

describe("useFormHook", () => {
  test("should update form values", () => {
    const { result } = renderHook(() => useForm({ name: "", email: "" }))

    act(() => {
      result.current.setValues({ name: "John", email: "john@example.com" })
    })

    expect(result.current.values).toEqual({ name: "John", email: "john@example.com" })
  })
})
