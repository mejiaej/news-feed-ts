describe('Test posts and comments ', () => {
  it('show comments', () => {
    cy.visitHome();

    cy.getDataCy('postExpand').eq(0).click();
    cy.getDataCy('postExpand').eq(1).click();
    cy.getDataCy('postExpand').eq(2).click();

    cy.getDataCy('commentsContainer').should(($commentsContainer) => {
      expect($commentsContainer).to.have.length(3);
    });

    cy.getDataCy('commentsContainer')
      .eq(0)
      .should(($commentContainer) => {
        expect($commentContainer.find('[data-cy=commentText]')).to.have.length(
          5,
        );

        expect(
          $commentContainer
            .find('[data-cy=commentText]')
            .eq(0)
            .find('span')
            .text(),
        ).equal('id labore ex et quam laborum - Eliseo@gardner.biz');

        expect(
          $commentContainer
            .find('[data-cy=commentText]')
            .eq(1)
            .find('span')
            .text(),
        ).equal('quo vero reiciendis velit similique earum - Jayne_Kuhic@sydney.com');
        
      });

      cy.getDataCy('postExpand').eq(0).click();
      cy.getDataCy('commentsContainer').should(($commentsContainer) => {
        expect($commentsContainer).to.have.length(2);
      });

      cy.getDataCy('postExpand').eq(1).click();
      cy.getDataCy('commentsContainer').should(($commentsContainer) => {
        expect($commentsContainer).to.have.length(1);
      });

      cy.getDataCy('postExpand').eq(2).click();
      cy.getDataCy('commentsContainer').should(($commentsContainer) => {
        expect($commentsContainer).to.have.length(0);
      });
  });
});
