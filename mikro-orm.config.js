module.exports = {
    entities: ['./dist/src/entities'], // path to our JS entities (dist), relative to `baseDir`
    dbName: 'dummy-test-db',
    password: 'password',
    user: 'postgres',
    allowGlobalContext: true,
    type: 'postgresql',
}
