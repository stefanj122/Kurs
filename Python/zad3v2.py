ja = {
    'Name': 'Stefan',
    'lastName': 'Jeftic',
}
def abbrivatedName(person):
    return person['Name'][0] + '. ' + person['lastName'][0] + '.'

print(abbrivatedName(ja))
