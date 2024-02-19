import t from 'tap'

t.equal(await (await fetch('http://localhost:51234/foo', {
  headers: {
    'user-agent': 'this is a test',
  },
})).text(), 'this is a test', 'got user-agent echoed back')
