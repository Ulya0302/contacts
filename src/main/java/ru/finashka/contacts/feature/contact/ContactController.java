package ru.finashka.contacts.feature.contact;

import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import ru.finashka.contacts.shared.ListResponse;
import ru.finashka.contacts.shared.Response;

@RestController
@RequestMapping("/api/contacts")
@RequiredArgsConstructor
public class ContactController {

    private final ContactService contactService;

    @GetMapping
    public ListResponse<ContactDto> getContacts(ContactFilter contactFilter) {
        var contacts = contactService.getContacts(contactFilter);
        return new ListResponse<>(contacts);
    }

    @PostMapping
    public Response<ContactDto> createContact(@RequestBody ContactDto contactDto) {
        var contact = contactService.createContact(contactDto);
        return new Response<>(contact);
    }

    @PutMapping("/{id}")
    public Response<ContactDto> updateContact(@PathVariable("id") Long id,
                                              @RequestBody ContactDto contactDto) {
        var contact = contactService.updateContact(id, contactDto);
        return new Response<>(contact);
    }

    @DeleteMapping("/{id}")
    public Response<Void> deleteContact(@PathVariable("id") Long id) {
        contactService.deleteContact(id);
        return new Response<>();
    }
}
