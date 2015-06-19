package com.test.domain;

public class CD {

    private Integer id;
    private String name;
    private String type;
    private String style;
    private String image;
    private Integer hot;

    public CD(int id, String name, String type, String style, String image, Integer hot) {
        this.id = id;
        this.name = name;
        this.type = type;
        this.style = style;
        this.image = image;
        this.hot = hot;
    }

    public Integer getHot() {
        return hot;
    }

    public void setHot(Integer hot) {
        this.hot = hot;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public String getStyle() {
        return style;
    }

    public void setStyle(String style) {
        this.style = style;
    }

    public String getImage() {
        return image;
    }

    public void setImage(String image) {
        this.image = image;
    }

}
