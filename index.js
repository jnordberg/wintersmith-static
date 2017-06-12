
function plugin(env, callback) {
    const patterns = env.config.static || []
    for (const pattern of patterns) {
        env.registerContentPlugin('static', pattern, env.plugins.StaticFile)
    }
    callback()
}

module.exports = plugin
