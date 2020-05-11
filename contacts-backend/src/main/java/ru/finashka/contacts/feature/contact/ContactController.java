package ru.finashka.contacts.feature.contact;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import ru.finashka.contacts.shared.dto.PagedListResponse;
import ru.finashka.contacts.shared.dto.PagingParam;
import ru.finashka.contacts.shared.dto.Response;

@Slf4j
@RestController
@RequestMapping("/api/contacts")
@RequiredArgsConstructor
public class ContactController {

    private final ContactService contactService;

    @GetMapping
    public PagedListResponse<ContactDto> getContacts(@RequestParam(value = "filter", defaultValue = "") String contactFilter, PagingParam pagingParam) {
        var page = contactService.getContacts(contactFilter, pagingParam);
        return new PagedListResponse<>(page);
    }

    @GetMapping("/{id}")
    public Response<ContactDto> getContact(@PathVariable("id") Long id) {
        var contact = contactService.getContact(id);
        return new Response<>(contact);
    }

    @PostMapping
    public Response<ContactDto> createContact(@RequestBody ContactDto contactDto) {
        var contact = contactService.createContact(contactDto);
        log.info("Created card: {}", contact);
        return new Response<>(contact);
    }

    @PutMapping("/{id}")
    public Response<ContactDto> updateContact(@PathVariable("id") Long id,
                                              @RequestBody ContactDto contactDto) {
        var contact = contactService.updateContact(id, contactDto);
        log.info("Update card: {}", contact);
        return new Response<>(contact);
    }

    @DeleteMapping("/{id}")
    public Response<Void> deleteContact(@PathVariable("id") Long id) {
        contactService.deleteContact(id);
        log.info("Delete card with id {}", id);
        return new Response<>();
    }
}
