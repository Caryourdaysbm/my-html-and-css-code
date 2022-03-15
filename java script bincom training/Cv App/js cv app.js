[2:49 AM, 3/2/2022] Shu: hub: self.removeContact = function(contact) {
    self.contacts.remove(contact);
};

self.addPhone = function(contact) {
    contact.phones.push({
        type: "",
        number: ""
    });
};

self.removePhone = function(phone) {
    $.each(self.contacts(), function() { this.phones.remove(phone) })
};

self.save = function() {
    self.lastSavedJson(JSON.stringify(ko.toJS(self.contacts), null, 2));
};

self.lastSavedJson = ko.observable("")
};

ko.applyBindings(new ContactsModel(initialData));
[2:50 AM, 3/2/2022] Shu: hub: self.removeContact = function(contact) {
    self.contacts.remove(contact);
};

self.addPhone = function(contact) {
    contact.phones.push({
        type: "",
        number: ""
    });
};

self.removePhone = function(phone) {
    $.each(self.contacts(), function() { this.phones.remove(phone) })
};

self.save = function() {
    self.lastSavedJson(JSON.stringify(ko.toJS(self.contacts), null, 2));
};

self.lastSavedJson = ko.observable("")
};

ko.applyBindings(new ContactsModel(initialData));