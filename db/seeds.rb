# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
t = Time.now
hour = 3600

Event.create(name: "Stand up", start: t, end: t + hour)
Event.create(name: "Challenges", start: t + hour, end: t + 3 * hour)
Event.create(name: "Breakout", start: t + 3 * hour, end: t + 3.5 * hour)
Event.create(name: "Stand up", start: t + 3.5 * hour, end: t + 4.5 * hour)
