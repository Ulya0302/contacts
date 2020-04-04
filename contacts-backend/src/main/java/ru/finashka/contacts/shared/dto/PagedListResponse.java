package ru.finashka.contacts.shared.dto;

import lombok.Getter;
import lombok.Setter;
import ru.finashka.contacts.shared.persistent.Page;

import java.util.List;

@Getter
@Setter
public class PagedListResponse<T> {
    private boolean success = true;
    private String msg;
    private List<T> data;
    private Long total;

    public PagedListResponse(Page<T> page) {
        this.data = page.getData();
        this.total = page.getTotal();
    }
}
