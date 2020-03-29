package ru.finashka.contacts.feature.contact;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import ru.finashka.contacts.exception.NotFoundException;

import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class ContactService {
    private final ContactRepository contactRepository;
    private final ContactMapper contactMapper;

    public List<ContactDto> getContacts(ContactFilter contactFilter) {
        var contacts = contactRepository.findByNameContainingIgnoreCase(contactFilter.getName());
        return contacts.stream()
                .map(contactMapper::map)
                .collect(Collectors.toList());
    }

    @Transactional
    public ContactDto createContact(ContactDto contactDto) {
        var contact = contactMapper.map(contactDto);
        return contactMapper.map(contactRepository.save(contact));
    }

    @Transactional
    public ContactDto updateContact(Long id, ContactDto contactDto) {
        var exists = contactRepository.existsById(id);
        if (!exists) {
            throw new NotFoundException(Contact.class, id);
        }
        var contact = contactMapper.map(contactDto);
        return contactMapper.map(contactRepository.save(contact));
    }

    @Transactional
    public void deleteContact(Long id) {
        contactRepository.deleteById(id);
    }
}
