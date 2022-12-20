function replaceTemplates(str, obj) {
   
    console.log(str.replace('{{name}}',obj.name)
                    .replace('{{email}}',obj.email)
                    .replace('{{phone}}',obj.phone))
}
const ja = {
    name: 'Steafn',
    email: 'stefan.jetic122@mgail.com',
    phone: '+38766015800'
}
const ti = {
    name: 'Dragana',
    email: 'dragana.josipovic95@gmail.com',
    phone: '+3876520160'
}
replaceTemplates("Name: {{name}}. Email: {{email}}. Phone: {{phone}}",ja)
replaceTemplates("Name: {{name}}. Email: {{email}}. Phone: {{phone}}",ti)

