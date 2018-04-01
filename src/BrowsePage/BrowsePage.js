import React, { Component } from "react";
import { Link } from "react-router-dom";
import Page from "../Page";
import styled from "styled-components";
import { withApi } from "../api";
import Badge from "../Badge";

class BrowsePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: null,
      areas: null
    };
  }

  componentDidMount() {
    const { listCategories, listAreas } = this.props;

    listCategories().then(categories => {
      this.setState({ categories });
    });

    listAreas().then(areas => {
      this.setState({ areas });
    });
  }

  render() {
    return (
      <Page>
        <Content>
          {this._renderCategories()}
          {this._renderAreas()}
        </Content>
      </Page>
    );
  }

  _renderCategories() {
    return this._renderSection(
      "By category",
      this.state.categories,
      item => item.strCategory,
      item => `${item}`
    );
  }

  _renderAreas() {
    return this._renderSection(
      "By area",
      this.state.areas,
      item => item.strArea,
      item => `${item}`
    );
  }

  _renderSection(title, items, nameFn, linkFn) {
    return (
      <Section>
        <SectionTitle>{title}</SectionTitle>
        {items ? (
          <BadgeList>
            {items.map(item => {
              const name = nameFn(item);
              const link = linkFn(item);
              return (
                <BadgeWrapper key={name} to={link}>
                  <Badge>{name}</Badge>
                </BadgeWrapper>
              );
            })}
          </BadgeList>
        ) : (
          <LoadingMessage>Loading categories...</LoadingMessage>
        )}
      </Section>
    );
  }
}

const Content = styled.section`
  margin-top: 64px;
`;

const Section = styled.section`
  text-align: center;
  margin: 64px 0;
`;

const SectionTitle = styled.div`
  font-family: var(--font-cursive);
  font-size: 2.5rem;
  color: var(--color-white);
  margin-bottom: 32px;
`;

const LoadingMessage = styled.h2`
  color: var(--color-white);
  font-weight: 500;
  font-size: 1.05rem;
`;

const BadgeList = styled.div`
  display: flex;
  max-width: 680px;
  margin: 0 auto;
  flex-wrap: wrap;
  justify-content: center;
`;

const BadgeWrapper = styled(Link)`
  text-decoration: none;
  margin: 8px;
`;

export default withApi(["listCategories", "listAreas"])(BrowsePage);
