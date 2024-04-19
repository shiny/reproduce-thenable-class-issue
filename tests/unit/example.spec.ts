import app from '@adonisjs/core/services/app'
import { test } from '@japa/runner'
class Database {
  where() {
      return this
  }
  and() {
      return this
  }
  limit() {
      return this
  }
  then(onFulfilled: (result: string) => any) {
      onFulfilled('my example result')
  }
}

test.group('Example', () => {
  test('example test', async ({ assert }) => {
    const db = await app.container.make(Database)
    const result = await db.where().and().limit()
    assert.equal(result, 'my example result')
  })
})
