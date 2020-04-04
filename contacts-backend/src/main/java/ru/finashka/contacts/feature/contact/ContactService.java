package ru.finashka.contacts.feature.contact;

import com.querydsl.core.types.Predicate;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.RequestParam;
import ru.finashka.contacts.exception.NotFoundException;
import ru.finashka.contacts.shared.dto.PagingParam;
import ru.finashka.contacts.shared.persistent.Page;
import ru.finashka.contacts.shared.utils.PageUtils;

import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class ContactService {
    private final ContactRepository contactRepository;
    private final ContactMapper contactMapper;

    public Page<ContactDto> getContacts(@RequestParam("filter") String contactFilter, PagingParam pagingParam) {
        Predicate predicateFor = ContactPredicateBuilder.getPredicateFor(contactFilter);
        var pageContacts = contactRepository.findAll(predicateFor, PageUtils.toPageRequest(pagingParam));
        List<ContactDto> data = pageContacts.get()
                .map(contactMapper::map)
                .collect(Collectors.toList());
        return new Page<>(data, pageContacts.getTotalElements());
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
