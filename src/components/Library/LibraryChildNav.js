import React from "react";
import { isEmpty } from "lodash";
import {
  StyledSectionLink,
  ArticleContainer,
  ArticleLink
} from "./LibraryChildNav.styled";

export class LibraryChildNav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      articlesIsOpen: false
    };
  }

  toggleArticleNav = targetUrl => {
    let path = this.props.value;
    if (path === targetUrl) {
      this.setState({ articlesIsOpen: !this.state.articlesIsOpen });
    }
  };

  filterArticle = sub => {
    if (sub.child) {
      if (sub.url === this.props.value) {
        this.toggleArticleNav(sub.url);
        sub["isPathActive"] = true;
        this.setState({
          articles: sub.child
        });
      }
    }
  };

  componentWillMount() {
    this.props.sections.map(sub => this.filterArticle(sub));
  }

  renderArticleNav = (articles, i) => (
    <ArticleContainer isOpen={this.state.articlesIsOpen} key={i + i.toString()}>
      {articles.map(article => (
        <ArticleLink key={article.name} href={article.url}>
          - {article.name}
        </ArticleLink>
      ))}
    </ArticleContainer>
  );

  render() {
    return (
      <>
        {this.props.sections.map((sub, i) => (
          <>
            <StyledSectionLink
              published={sub.published}
              key={sub.name + i}
              to={sub.url}
              isActive={sub.url === this.props.value}
              onClick={e => {
                this.toggleArticleNav(sub.url);
                if (!sub.published) e.preventDefault();
              }}
            >
              {sub.name}
            </StyledSectionLink>
            {sub.url === this.props.value &&
              !isEmpty(this.state.articles) &&
              this.renderArticleNav(this.state.articles, i)}
          </>
        ))}
      </>
    );
  }
}
