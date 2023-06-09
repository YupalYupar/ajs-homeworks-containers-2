import ErrorRepository from "../app";

test('testing error throwing', () => {
    const error1 = new ErrorRepository().translate(502);
    expect(error1).toBe('gateway error')
})

test('testing unknown error throwing', () => {
    const error1 = new ErrorRepository().translate(503);
    expect(error1).toBe('unknown error')
})